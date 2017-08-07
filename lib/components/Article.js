import React from 'react';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div>
      <div>
        <div>{article.title}</div>
        <div>{article.date}</div>
      </div>

      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>

      <div>
        <div>{article.body}</div>
      </div>
    </div>
  );
};

export default Article;
