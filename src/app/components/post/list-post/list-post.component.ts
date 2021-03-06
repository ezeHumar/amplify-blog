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

  //usernameFilter gets an username and uses it as a filter to only get thar user's posts. Is't used for the user profile
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
          username
          profilePicture{
            bucket
            key
            region
          }
        }
      }
      nextToken
    }
  }`;

  //The posts that are going to be shown in the template
  postsList: Array<Post> = [];
  //Determines which auth provider should be used
  authMode : GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AWS_IAM;

  //Indicates if the post have been loaded (true) or not (false)
  isLoaded: boolean = false;

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

    //Retrieve the posts and indicate that the posts have been loaded
    this.getPosts(this.authMode).then(() => this.isLoaded = true );
  }

  async getPosts(authMode: GRAPHQL_AUTH_MODE) { 
    //This function gets the posts from the db
    const res = await API.graphql({ query: this.statement, variables: undefined, authMode: authMode });
    this.postsList = (res as any).data.listPosts.items; //The res variable is parsed beceuse if it's not it gives an error
  }
}
