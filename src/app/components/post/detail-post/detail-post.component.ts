import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Auth, Storage } from 'aws-amplify';
import { Post } from '../../../model/post'
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Comment } from 'src/app/model/comment';
import { Profile } from 'src/app/model/profile';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id: string = ""; //id of the post
  post = new Post("","","");
  isOwner: boolean = false; //to check if the user authenticated is owner of the post
  authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AWS_IAM;//Determines which auth provider should be used
  usernameLogged: String = "";//Has the username of the logged user (if is there any)
  postProfile: Profile = {};//Profile of the post owner

  //Determines if the posts have been loaded (true) or not (false)
  isLoaded: boolean = false;

  postComments: Comment[] | undefined = [];//Comments that belong to the post

  constructor(private api: APIService, private route: ActivatedRoute, private router: Router) { 
    this.id = route.snapshot.params["id"];//retrieve the id passed on the url
  }

  img: any;

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
        profilePicture{
          bucket
          key
          region
        }
      }
      comments {
        __typename
        items {
          __typename
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

  async ngOnInit() {

    await Auth.currentAuthenticatedUser()
      .then((data) => {
        //If the user is authenticated the querie is made using cognito
        this.authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;
        this.usernameLogged = data.username;
      })
      .catch(() => {
        //If the user is authenticated the querie is made using IAM
        this.authMode = GRAPHQL_AUTH_MODE.AWS_IAM;
      });

      await this.getPost(this.authMode).then (() => {console.log(this.isLoaded)});

      //The profile of the post owner is saved
      this.postProfile = this.post.profile!;      

      //Recover the post's comments
      this.postComments = this.getComments(this.post);
      
      //Indicate that the posts have been loaded
      this.isLoaded = true;
      
      if(this.usernameLogged === this.post.owner){
        this.isOwner = true;
      }
  }

  //This fuction return the comments of the post that receives
  getComments(post: Post) {
    return (post as any).comments.items;
  }

  //This function adds a comment received to the comments array
  addCommentCreated(newComment: Comment){
    try {
      console.log(newComment);
      this.postComments!.push(newComment);
    } catch (error) {
      console.log("The comment has to exist");
    }
    
  }

  //This function gets the post from the db using the id from the url
  async getPost(authMode: GRAPHQL_AUTH_MODE) {
    console.log(this.id);
    const res = await API.graphql({ query: this.statement, variables: {id : this.id}, authMode: authMode });
    console.log((res as any).data.getPost);
    this.post = (res as any).data.getPost; //The res variable is parsed beceuse if it's not it gives an error
  }

  //This function deletes the post
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

  getImageSrc(key: string): string | Object{
    let imgSrc: string | Object ="";
    Storage.get(key, {expires: 60}).then( data => {
      console.log(data);
      imgSrc=data;
    })
    .catch((err) => {
      console.log(err)
    });
    return imgSrc;
  }
}
