import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Auth } from 'aws-amplify';
import { Post } from '../../../model/post'
import { API, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id: string = ""; //id of the post
  isOwner: boolean = false; //to check if the user authenticated is owner of the post
  authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AWS_IAM;//Determines which auth provider should be used
  usernameLogged: String = ""//Has the username of the logged user (if is there any)


  constructor(private api: APIService, private route: ActivatedRoute, private router: Router) { 
    this.id = route.snapshot.params["id"];//recover the id passed on the url
  }

  statement: string = `query GetPost($id: ID!) {
    getPost(id: $id) {
      __typename
      id
      title
      content
      owner
      createdAt
      profile {
        __typename
        username
      }
      comments {
        __typename
        items {
          __typename
          content
          owner
          createdAt
        }
        nextToken
      }
      tags {
        __typename
        items {
          __typename
          id
          tagID
        }
        nextToken
      }
    }
  }`;

  post = new Post("","", "");

  async ngOnInit() {

    await Auth.currentAuthenticatedUser()
      .then((data) => {
        //If the user is authenticated the querie is made using cognito
        this.authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;
        this.usernameLogged = data.username;
        console.log(data);
      })
      .catch(() => {
        //If the user is authenticated the querie is made using IAM
        this.authMode = GRAPHQL_AUTH_MODE.AWS_IAM;
      });

      await this.getPost(this.authMode);
      
      if(this.usernameLogged === this.post.owner){
        this.isOwner = true;
      }
      console.log(this.isOwner, this.post.owner, this.usernameLogged)

  }

  async getPost(authMode: GRAPHQL_AUTH_MODE) {
    //This function gets the post from the db using the id from the url
    console.log(this.id);
    const res = await API.graphql({ query: this.statement, variables: {id : this.id}, authMode: authMode });
    this.post = (res as any).data.getPost; //The res variable is parsed beceuse if it's not it gives an error
    console.log(this.post);
  }

  onDelete(){
    //The DeletePost function is called passing only the id. If the entire post is passed it gives an error because the attributes do not match
    this.api.DeletePost({"id": this.post.id }).then( data => {
      console.log("Post deleted");
      this.router.navigate(['']);
    })
    .catch( err => {
      console.log("Error deleting post");
    });
  }

}
