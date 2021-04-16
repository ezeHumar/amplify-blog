import { Comment } from './comment'

export class Post {
    id: string;
    title: String;
    comments : Comment[];

    constructor() {
        this.id = '';
        this.title = '';
        this.comments = [];
    }
}