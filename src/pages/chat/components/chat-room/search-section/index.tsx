import React from "react";
import styled from "styled-components";
import SearchField from "../../search-field";

const Search = styled(SearchField)`
  background: #f6f6f6;
`;

const Content = styled.div`
  background: white;
  height: 100%;
  padding-top: 5pc;
  color: #00000099;
  text-align: center;
  font-size: 0.85rem;
`;

export default function SearchSection() {
  return (
    <React.Fragment>
      <Search placeholder="Search messages ..." />
      <Content />
    </React.Fragment>
  );
}
