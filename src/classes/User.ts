import { Post, randFullName, randPost } from "@ngneat/falso";
import { IUser } from "../interfaces/User";

class User implements IUser {
  name: string;
  id: string;
  post: Post;
  email: string;
  constructor() {
    this.name = randFullName();
    this.email = `${this.name.toLowerCase().replace(" ", "")}@gmail.com`;
    this.post = randPost();
    this.id = `${this.email}__${Date.now()}`;
  }
}

export default User;
