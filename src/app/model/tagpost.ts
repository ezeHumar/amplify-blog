export class Tagpost {
    id?: string | null;
    postID: string;
    tagID: string;

    constructor(postID: string, tagID: string){
        this.postID = postID;
        this.tagID = tagID;
    }
}
