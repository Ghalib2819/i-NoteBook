import React from "react";
export default function Alert(props) {
  return (
    <div className="my-2" style={{ height: "50px" }}>
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type} </strong>
            {props.alert.msg}
          </div>
        </div>
      )}
  </div>
  );
}