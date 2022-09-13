import React, { useState } from "react";
import SideBar from "./style";
import { Link } from "~components";
import styled from "styled-components";
import { findBlogs } from "~services/blogServices";
import { useQuery } from "react-query";
import { navigate } from "gatsby";

const SuggestionSearch = styled(SideBar.Search)`
  border: 1px solid rgba(62, 73, 243, 0.1);
`;

const SuggestionForm = styled.form`
  border: none !important;
`;

const SuggestionDivide = styled.div`
  width: 100%;
  height: 0px;
  border-bottom: 1px solid rgba(62, 73, 243, 0.1) !important;
`;

const DivideContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 16px;
`;

const SuggestionResult = styled.div``;

const SuggestionList = styled.ul`
  list-style-type: none;
`;

const SuggestionContent = styled.span`
  margin-left: 20px;
  margin-right: 5px;
`;

const SuggestionItem = styled.li`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export default function SideBarSection() {
  const [keyword, setKeyword] = useState("");

  const { data } = useQuery(
    ["findBlogs", keyword],
    () => findBlogs({ blogName: keyword, limit: 3, offset: 0 }),
    {
      // ⬇️ disabled as long as the keyword is empty
      enabled: !!keyword,
    }
  );

  const { data: recentPosts } = useQuery(["findBlogs"], () =>
    findBlogs({ limit: 3, offset: 0 })
  );

  return (
    <SideBar>
      {/* Single Widgets */}
      {/* <SideBar.Widgets>
        <SideBar.Title>Search</SideBar.Title>
        <SuggestionSearch>
          <SuggestionForm action="./">
            <i className="fa fa-search" />
            <input
              type="text"
              placeholder="Type to search"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            {keyword && keyword.length > 0 && (
              <span
                className="pointer"
                onClick={() => {
                  setKeyword("");
                }}
              >
                <i className="fa fa-times" />
              </span>
            )}
          </SuggestionForm>
          {data?.data?.items && data?.data?.items.length > 0 && (
            <>
              <DivideContainer>
                <SuggestionDivide></SuggestionDivide>
              </DivideContainer>
              <SuggestionResult>
                <SuggestionList>
                  {data?.data?.items?.map(({ fields, sys }, index) => {
                    return (
                      <SuggestionItem
                        key={index}
                        className="flex-left pointer"
                        onClick={() => {
                          navigate("/blog/" + fields?.keyword);
                        }}
                      >
                        <i
                          className="fa fa-search"
                          style={{ color: "#3e49f3" }}
                        />
                        <SuggestionContent>{fields?.title}</SuggestionContent>
                      </SuggestionItem>
                    );
                  })}
                </SuggestionList>
              </SuggestionResult>
            </>
          )}
          {data?.data?.items && data?.data?.items.length === 0 && (
            <>
              <DivideContainer>
                <SuggestionDivide></SuggestionDivide>
              </DivideContainer>
              <SuggestionResult>
                <SuggestionList>
                  <SuggestionItem className="flex-left">
                    <i className="fa fa-search" style={{ color: "#3e49f3" }} />
                    <SuggestionContent>No results</SuggestionContent>
                  </SuggestionItem>
                </SuggestionList>
              </SuggestionResult>
            </>
          )}
        </SuggestionSearch>
      </SideBar.Widgets> */}
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Recent Posts</SideBar.Title>
        <SideBar.RecentPost>
          {recentPosts?.data?.items?.map(({ fields, sys }, index) => {
            return (
              <SideBar.RecentPostList
                key={index}
                onClick={() => {
                  navigate("/blog/" + fields?.keyword);
                }}
              >
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
