import React from "react";
import { Link } from "~components";
import Card from "./style";
export default function ServicesCard({
  icon,
  title,
  text,
  to,
  iconBackground,
  ...rest
}) {
  return (
    <Card as={Link} to={to}>
    

    <div className="d-flex gap-3 align-items justify-center">
    <Card.Icon iconBackground={iconBackground}>
        <i className={icon} />
      </Card.Icon>

      <Card.Title as="h3">
        {title}
        </Card.Title>
    </div>

      <Card.Text as="p">{text}</Card.Text>
      {/* <Card.Link as="p">
        Read More&nbsp;
        <span>&#10230;</span>
      </Card.Link> */}
    </Card>
  );
}
