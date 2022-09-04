import React from "react";

import classes from "./ErrorModel.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <h2 className={classes.header}>{props.title}</h2>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
