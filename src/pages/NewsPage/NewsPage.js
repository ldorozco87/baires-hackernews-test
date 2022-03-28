import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "../../components/Search/Search";
import NewsCard from "../../components/NewsCard/NewsCard";

import { NewsPageWrapper } from "./styles";
import Spinner from "../../assets/img/spinner.gif";
import LogoBlue from "../../assets/img/bairesdev-logo-blue.svg";

const NewsPage = () => {
  const EndPoint = "http://hn.algolia.com/api/v1/search?";
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);  
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");  

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuery(searchInput);
  };

  const handleOnchange = (event) => {
    setSearchInput(event.target.value);
    handleSubmit(event);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(EndPoint, { params: { query } });
        const { hits } = data;
        setArticles(hits);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <NewsPageWrapper>
      <header>
        <img src={LogoBlue} className="main-logo" alt="Baires Dev" />

        <h1 className="text-center">
          HackerNews <span className="d-xs-none">&mdash;</span>
          <span className="d-block d-sm-inline">Search</span>
        </h1>

        <Search
          onChange={(event) => handleOnchange(event)}
          onSubmit={handleSubmit}
          placeholder="Search news ..."
          value={searchInput}
        />
      </header>

      <div className={`news-container ${searchInput ? "results" : ""}`}>
        {isLoading ? (
          <figure className="text-center">
            <img src={Spinner} alt="spinner" />
            <figcaption>Loading...</figcaption>
          </figure>
        ) : (
          articles.map((article) => (
            <NewsCard key={article.objectID} article={article} />
          ))
        )}
      </div>
    </NewsPageWrapper>
  );
};

export default NewsPage;
