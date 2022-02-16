import { Typography } from "@mui/material";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" component="h4">
        Hello
      </Typography>
    </div>
  );
};

export default Home;
