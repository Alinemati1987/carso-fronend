import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../../store/appState/actions";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert
      style={{
        position: "fixed",
        boxShadow: " 5px 3px 5px #a4161a , 3px 3px 3px grey",
      }}
      show={showMessage}
      variant={message.variant}
      dismissible={message.dismissable}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      {message.text}
    </Alert>
  );
}
