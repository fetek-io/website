import React from "react";
import { StaticImage as Img } from "gatsby-plugin-image";
import SideBar from "./style";
import { Link } from "~components";
export default function SideBarSection() {
  return (
    <SideBar>
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Search</SideBar.Title>
        <SideBar.Search>
          <form action="./">
            <i className="fa fa-search" />
            <input type="text" placeholder="Type to search" />
          </form>
        </SideBar.Search>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Recent Posts</SideBar.Title>
        <SideBar.RecentPost>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                How To Blow Through Capital At An Incredible Rate
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>Jan 14, 2020</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                Design Studios That Everyone Should Know About?
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>Jan 14, 2020</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                How did we get 1M+ visitors in 30 days without anything!
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>Jan 14, 2020</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
        </SideBar.RecentPost>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      {/*/ .Single Widgets */}
      {/* Single Widgets */}

      {/*/ .Single Widgets */}
      {/* Single Widgets */}

      {/*/ .Single Widgets */}
    </SideBar>
  );
}
