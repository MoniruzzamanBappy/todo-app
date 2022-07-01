import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLinks = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Nav.Link as={Link}
        style={{ color: match ? "#b1871b" : "black" }}
        to={to}
        {...props}
      >
        {children}
      </Nav.Link>
    </div>
  );
};

export default CustomLinks;
