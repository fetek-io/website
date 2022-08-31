import React from "react";
import { SuperTag } from "~components";
import Card from "./style";
export default function BlogCard({
  text,
  title,
  date,
  user,
  badge,
  image,
  ...rest
}) {
  return (
    <Card>
      <Card.Image>
        <img src={image} alt="Blog" />
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.Badge backgroundColor="#ff5722">{badge}</Card.Badge>
          <Card.Date to="/blog/blog-details">
            {new Date(date).toDateString()}
          </Card.Date>
        </Card.Top>
        <Card.Title to="/blog/blog-details">
          {" "}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Bottom>
          <Card.User to="/blog/blog-details">
            <i className="far fa-user"></i>
            <SuperTag value={user} />
          </Card.User>
        </Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  );
}
