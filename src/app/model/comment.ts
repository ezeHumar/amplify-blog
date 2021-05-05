import { Profile } from "./profile";

export class Comment {
    id?: string | null;
    postID: string;
    content: string;
    profileID: string;
    profile?: Profile;
    createdAt?: string;

    constructor(postID: string, content: string, profileID: string, profile?: Profile){
        this.postID = postID;
        this.content = content;
        this.profileID = profileID;
        this.profile = profile;
    }
}
