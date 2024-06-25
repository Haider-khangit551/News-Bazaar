import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, discription, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: "1" }}>
            {source}
          </span>
          <img src={!imgUrl?"https://freesvg.org/img/linked3.png":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

            <p className="card-text">{discription}</p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
