import React, { useState } from 'react'
import beach from './assets/beach.jpeg'
// import './App.css'

const Article = ({ title, content, picture }) => (
  <div>
    <h3>{title}</h3>
    <img src={picture} alt="" />
    <p>{content}</p>
  </div>
);

const ArticleList = ({ articles, page, setPage }) => {
  const startIndex = (page - 1);
  const endIndex = startIndex + 1;
  const visibleArticles = articles.slice(startIndex, endIndex);

  return (
    <div>
      {visibleArticles.map(({title, content, picture}) => (
        <Article key={title} title={title} content={content} picture={picture} />
      ))}
      <div>
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        {articles.length > endIndex && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

const ArticlePage = () => {
  const [page, setPage] = useState(1);
  const articles = [
    { title: 'Article 1', content: 'Content 1. adsf asdf as. ssss', picture: beach},
    { title: 'Article 2', content: 'Content 2' },
    { title: 'Article 3', content: 'Content 3' },
    { title: 'Article 4', content: 'Content 4' },
    { title: 'Article 5', content: 'Content 5' },
    { title: 'Article 6', content: 'Content 6' },
  ];

  return (
    <ArticleList articles={articles} page={page} setPage={setPage} />
  );
};

export default ArticlePage;
