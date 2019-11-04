import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const cards = props.authors.map(author => (
    <AuthorCard
      author={author}
      keys={`${author.first_name} ${author.last_name}`}
    />
  ));

  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{cards}</div>
      </div>
    </div>
  );
};

export default AuthorList;
