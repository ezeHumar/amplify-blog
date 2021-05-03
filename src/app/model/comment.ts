export class Comment {
    id?: string | null;
    postID: string;
    content: string;
    profileID: string;

    constructor(postID: string, content: string, profileID: string){
        this.postID = postID;
        this.content = content;
        this.profileID = profileID;
    }
}
