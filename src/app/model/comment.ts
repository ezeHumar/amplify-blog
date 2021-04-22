export class Comment {
    id?: string | null;
    postID: string;
    content: string;

    constructor(postID: string, content: string){
        this.postID = postID;
        this.content = content;
    }
}
