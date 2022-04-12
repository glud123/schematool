import React, { FC } from "react";
import { createUseStyles } from "react-jss";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = (props) => {
  const { title, children } = props;
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};

export default Card;

const useStyles = createUseStyles({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
    padding: "16px 0",
  },
});
