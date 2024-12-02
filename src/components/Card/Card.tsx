import React from "react";

import styles from "./Card.module.css";

export interface CardProps {
  title: string;
  subtitle?: string;
}

const Card = (props: CardProps): React.JSX.Element => {
  const { title, subtitle } = props;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Card;
