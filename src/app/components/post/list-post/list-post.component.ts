import { Component, Input, OnInit } from '@angular/core';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import { Post } from '../../../model/post'


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  //usernameFilter gets an username an uses it as a filter to only get thar user's posts. Is't used for the user profile
  @Input() usernameFilter: any;

  constructor() { }

  statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      __typename
      items {
        id
        title
        content
        owner
        createdAt
        profile {
          profilePictureURL
        }
      }
      nextToken
    }
  }`;

  postsList: Array<Post> = [];
  authMode : GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AWS_IAM;//Determines which auth provider should be used

  async ngOnInit() {

  
    await Auth.currentAuthenticatedUser()
    .then( () => {
      //If the user is authenticated the querie is made using cognito
      this.authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;
    })
    .catch(() => {
      //If the user is authenticated the querie is made using IAM
      this.authMode = GRAPHQL_AUTH_MODE.AWS_IAM;
    });

    this.getPosts(this.authMode);
  }

  async getPosts(authMode: GRAPHQL_AUTH_MODE) { 
    //This function gets the posts from the db
    const res = await API.graphql({ query: this.statement, variables: undefined, authMode: authMode });
    this.postsList = (res as any).data.listPosts.items; //The res variable is parsed beceuse if it's not it gives an error
    console.log((res as any).data.listPosts.items);
  }
}
