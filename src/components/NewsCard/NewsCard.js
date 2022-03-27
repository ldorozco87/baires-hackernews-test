import React from "react";
import { NewsCardWrapper } from "./styles";

const NewsCard = ({ article }) => {
  if (!article.title) return null;

  const currentDate = new Date(article.created_at);

  return (
    <NewsCardWrapper>
      <section className="d-flex justify-space-between">
        <em className="article-score">
          <strong>Score:</strong> {article.points}
        </em>
        <em className="article-date">
          <strong>Created:</strong> {currentDate.toLocaleDateString()}
        </em>
      </section>
      <em className="article-author">
        <strong>Author:</strong> {article.author}
      </em>

      <h2 className="article-title">{article.title}</h2>

      <a
        href={article.url}
        className="article-link"
        target="_blank"
        rel="noreferrer"
      >
        Read More
      </a>
    </NewsCardWrapper>
  );
};

export default NewsCard;
