import Link from "next/link";
import userStyles from "../styles/Jacob.module.css";

const ListUsers = ({ user }) => {
  return (
    <Link href={`/jacob/${user.id}`}>
      <a className={userStyles.single}>{user.name}</a>
    </Link>
  );
};

export default ListUsers;
