import { FC } from "react";
import { IUser } from "../interfaces/User";

type UserCardProps = {
  user: IUser;
  onDelete: (userId: string) => void;
};

export const UserCard: FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <li
      style={{
        border: "1px solid gray",
        margin: "8px 0",
        borderRadius: "6px",
        listStyle: "none",
        padding: "16px",
      }}
    >
      <h4>{user.name}</h4>
      <h5>{user.email}</h5>
      <article>
        <h5>{user.post.title}</h5>
        <p>{user.post.body}</p>
      </article>
      <button
        onClick={() => {
          onDelete(user.id);
        }}
      >
        Delete Me
      </button>
    </li>
  );
};
