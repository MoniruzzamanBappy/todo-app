import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-com">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="px-3">Loading...</span>
      </Button>
    </div>
  );
};

export default Loading;
