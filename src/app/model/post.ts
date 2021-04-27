export class Post {
    id?: string | null;
    owner?: string | null;
    title: string;
    content: string;

    constructor(title: string, content: string){
        this.title=title;
        this.content=content;
    }
}
