import ListUsers from "../../components/ListUsers";

const Jacob = ({ data }) => {
  return (
    <div>
      <h1>Users</h1>
      {data.map((user) => (
        <ListUsers user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Jacob;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
