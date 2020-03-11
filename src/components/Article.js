import React from 'react';

const Article = (props) => {
    const { details } = props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="card">
            <img className="card-img-top" src={details.urlToImage} alt="NewsImage" />
            <div className="card-block">
                <h6 className="card-title">
                <a href={details.url} target="_blank">
                {details.title}
                </a>
                </h6>
                <p className="card-text">{details.description}</p>
            </div>
        </div>
      </div>
    )
}

export default Article;