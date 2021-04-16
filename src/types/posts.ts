import { Comment } from './comments';

export type Post = {
    id : string,
    title: string,
    comments : Comment[]
}