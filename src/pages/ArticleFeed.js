import { useEffect, useState } from "react";
import "../style.scss";
import { fetchAPIData } from "../api";
import { formatDateTime } from "../services";

let authorData = [];

const endPoint = 'https://www.exceptional.com/wp-json/wp/v2/'

export const ArticleFeed = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalArticleCount, setTotalArticleCount] = useState(0);
  const recordsPerPage = 5;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchArticleData = async () => {
      const apiUrl = `${endPoint}\posts`;

      const response = await fetchAPIData(apiUrl);
      if (!response) {
        setIsLoading(false);
      }
      if (response.length > 0) {
        const data = response.map(
          ({ id, date, title, link, author, excerpt }, index) => {
            return {
              id,
              date,
              title: title.rendered,
              link,
              author,
              excerpt: excerpt.rendered,
            };
          }
        );
        setArticles(data);
        const totalLength = response.length;
        setTotalArticleCount(totalLength);

        setIsLoading(false);
      }
    };
    fetchArticleData();
  }, []);

  const visibleRows = () => {
    return articles.slice(
      pageNumber * recordsPerPage,
      pageNumber * recordsPerPage + recordsPerPage
    );
  };

  const handlePagination = (mode) => {
    if (mode === "prev") {
      setPageNumber(pageNumber - 1);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      <h1 className="header">Article Feed</h1>
      <div className="feed">
        <section className="cards">
          {isLoading ? (
            <div className="header">Loading...</div>
          ) : (
            visibleRows().map((article) => <Feed article={article}></Feed>)
          )}
        </section>
      </div>
      <div className="pagination">
        <span>
          <button
            onClick={() => handlePagination("prev")}
            disabled={pageNumber === 0}
          >
            Previous
          </button>
          {pageNumber + 1}
          <button
            onClick={() => handlePagination("next")}
            disabled={
              pageNumber === Math.ceil(totalArticleCount / recordsPerPage) - 1
            }
          >
            Next
          </button>
        </span>
      </div>
    </>
  );
};

export const Feed = ({ article }) => {
  return (
    <div className="card" key={article.id}>
      <div className="card__content">
        <a href={article.link} target="_blank">
          <p className="card__title text--medium">{article.title}</p>
        </a>
        <div dangerouslySetInnerHTML={{ __html: article.excerpt }}></div>
        <div className="card__info">
          <p className="text--medium">{formatDateTime(article.date)}</p>
          <p className="card__price text--medium">
            <AuthorName authorId={article.author}></AuthorName>
          </p>
        </div>
      </div>
    </div>
  );
};

export const AuthorName = ({ authorId }) => {
  const [authorName, setAuthorName] = useState("");
  useEffect(() => {
    const getAuthorName = async () => {
      const apiUrl = `${endPoint}users/${authorId}`;
      const response = await fetchAPIData(apiUrl);
      if (response?.name) {
        authorData.push(response);
        setAuthorName(response.name);
      }
    };
    //Check if the author API call already triggered and data available in cache
    let authorAvailable = authorData.find((author) => author.id === authorId);
    if (typeof authorAvailable === "undefined") {
      getAuthorName();
    } else {
      setAuthorName(authorAvailable.name);
    }
  }, []);

  return <>{authorName}</>;
};
