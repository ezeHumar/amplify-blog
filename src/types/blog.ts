import { Post } from './posts';

export type Blog = {
    id : string,
    name: string,
    posts : Post[]
};