import { Profile } from "./profile";

export class Post {
    id?: string | null;
    owner?: string | null;
    title: string;
    content: string;
    profileID: string;
    profile?: Profile | null;

    constructor(title: string, content: string, profileID: string){
        this.title=title;
        this.content=content;
        this.profileID = profileID;
    }
}
