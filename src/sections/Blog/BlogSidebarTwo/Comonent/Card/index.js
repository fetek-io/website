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
  keyword,
  ...rest
}) {
  return (
    <Card>
      <Card.Image>
        <img src={image} alt="Blog" />
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.Badge backgroundColor="#60E1CB">{badge}</Card.Badge>
          <Card.Date to={"/blog/" + keyword}>
            {new Date(date).toDateString()}
          </Card.Date>
        </Card.Top>
        <Card.Title to={"/blog/" + keyword}>
          {" "}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Bottom>
          <Card.User to={"/blog/" + keyword}>
            <i className="far fa-user"></i>
            <SuperTag value={user} />
          </Card.User>
        </Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  );
}
