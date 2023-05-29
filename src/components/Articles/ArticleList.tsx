import React from 'react'
import styled from 'styled-components';

const ArticleList: React.FunctionComponent = () => {
  return (
    <ArticleContainer>All articles</ArticleContainer>
  )
}

export default ArticleList;

const ArticleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 100vh;
    background-color: #E0E0E0;
`