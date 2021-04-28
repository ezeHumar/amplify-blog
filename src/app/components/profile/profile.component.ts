import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Storage, Auth } from 'aws-amplify';
import { APIService } from 'src/app/API.service';
import { Post } from 'src/app/model/post';
import { Profile } from 'src/app/model/profile';
import awsExports from 'src/aws-exports';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usernameURL: String = "";//The username given in the url

  constructor(private route: ActivatedRoute, private api: APIService) {
    this.usernameURL = route.snapshot.params["username"];//recover the id passed on the url
  }

  profile: Profile = {}; //The profile that is going to be recovered from the db
  userPostsList: Array<Post> = [];
  authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AWS_IAM;//Determines which auth provider should be used

  statementGetProfile = `query ListProfiles($filter: ModelProfileFilterInput, $limit: Int, $nextToken: String) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      __typename
      items {
        id
        username
        email
        profilePictureURL
      }
      nextToken
    }
  }`;

  statementGetPosts = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      __typename
      items {
        id
        title
        content
        owner
        createdAt
      }
      nextToken
    }
  }`;

  async ngOnInit() {
    await Auth.currentAuthenticatedUser()
      .then(() => {
        //If the user is authenticated the querie is made using cognito
        this.authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;
      })
      .catch(() => {
        //If the user is authenticated the querie is made using IAM
        this.authMode = GRAPHQL_AUTH_MODE.AWS_IAM;
      });
    this.getProfile(this.authMode);
    this.getPosts(this.authMode);
  }

  async getPosts(authMode: GRAPHQL_AUTH_MODE) {
    //This function gets the posts from the db
    const res = await API.graphql({ query: this.statementGetPosts, variables: { filter: { owner: { eq: this.usernameURL } } }, authMode: authMode });
    this.userPostsList = (res as any).data.listPosts.items; //The res variable is parsed beceuse if it's not it gives an error
    console.log((res as any).data.listPosts.items);
  }

  async getProfile(authMode: GRAPHQL_AUTH_MODE) {
    //This function makes the querie to recover the profile
    const res = await API.graphql({ query: this.statementGetProfile, variables: { filter: { username: { eq: this.usernameURL } } }, authMode: authMode });
    this.profile = (res as any).data.listProfiles.items[0]; //The res variable is parsed because if it's not it gives an error
    console.log(this.authMode);
  }

  onChange(e: Event) {
    console.log("disparado");
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      const file = fileList[0];
      Storage.put(this.profile.username!, file, {
        contentType: 'image/png'
      }).then((data) => {
        console.log(data);
        this.api.UpdateProfile({id: this.profile.id!, profilePictureURL: "https://" + awsExports.aws_user_files_s3_bucket + ".s3." + awsExports.aws_appsync_region + ".amazonaws.com/public/" + this.profile.username})
        console.log("Image uploaded correctly");
      })
        .catch(err => console.log("Error uploading image"));
    }
  }
}
