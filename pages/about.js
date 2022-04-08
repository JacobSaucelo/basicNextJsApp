import Head from "next/head";
import homeStyles from "../styles/Home.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>Jacob List | About</title>
        <meta name="keywords" content="jacob" />
      </Head>
      <div>
        <h1>About</h1>
        <p className={homeStyles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quis
          possimus harum voluptatibus autem repellendus earum accusamus suscipit
          officia ea?
        </p>
      </div>
    </>
  );
};

export default about;
