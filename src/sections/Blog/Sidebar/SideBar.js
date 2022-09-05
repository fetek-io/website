import React from "react";
import { StaticImage as Img } from "gatsby-plugin-image";
import SideBar from "./style";
import { Link } from "~components";
import { debounce } from "lodash";
import { useQuery } from "react-query";
import { findBlogs } from "~services/blogServices";

export default function SideBarSection({ handleSearchBlog }) {
  const { data, isLoading: loading } = useQuery(["findBlogs"], () =>
    findBlogs({ limit: 3, offset: 0 })
  );

  return (
    <SideBar>
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Search</SideBar.Title>
        <SideBar.Search>
          <form action="./">
            <i className="fa fa-search" />
            <input
              type="text"
              placeholder="Type to search"
              onChange={debounce((e) => {
                handleSearchBlog(e.target.value);
              }, 500)}
            />
          </form>
        </SideBar.Search>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Recent Posts</SideBar.Title>
        <SideBar.RecentPost>
          {data?.data?.items?.map(({ fields, sys }, index) => {
            return (
              <SideBar.RecentPostList key={index}>
                <Link to="#">
                  <SideBar.RecentPostTitle>
                    {fields?.title}
                  </SideBar.RecentPostTitle>
                  <SideBar.RecentPostDate>
                    {new Date(sys?.createdAt).toDateString()}
                  </SideBar.RecentPostDate>
                </Link>
              </SideBar.RecentPostList>
            );
          })}
        </SideBar.RecentPost>
      </SideBar.Widgets>
    </SideBar>
  );
}
