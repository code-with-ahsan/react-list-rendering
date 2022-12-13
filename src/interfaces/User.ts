import { Post } from "@ngneat/falso";

export interface IUser {
  post: Post;
  email: string;
  name: string;
  id: string;
}
