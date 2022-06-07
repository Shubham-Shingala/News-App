import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card mb-3 p-3 shadow bg-body">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "10px",
              marginTop: '-10px',
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} On {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
