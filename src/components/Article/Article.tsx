import React from 'react';
import img from "./assets/Mask group.png";
import img1 from "./assets/Mask group (1).png"
import img2 from "./assets/Mask group (2).png"
import "./Article.css"

const Article = () => {
  return (
    <div className="article-card">
      <div>calendar</div>
      <div>
      <h3 className='article-card-h3'>Recommended Articles</h3>
      <div className="article-card1">
      
        <div className="article-icon1">
          <img className='article-img' src={img} alt="" />
        </div>
        <div className="article-content">
          <h3 className='article-h3'>5 ways to keep a child from danger</h3>
          <p className='article-small-p'> 10 mins read</p>
          <p className='article-large-p'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum
          </p >
        </div>
      </div>

      <div className="article-card1">
        <div className="article-icon1">
          <img className='article-img' src={img1} alt="" />
        </div>
        <div className="article-content">
          <h3 className='article-h3'>5 ways to keep a child from danger</h3>
          <p className='article-small-p'>5 mins read</p>
          <p className='article-large-p'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum
          </p>
        </div>
      </div>

      <div className="article-card1">
        <div className="article-icon1">
          <img className='article-img' src={img2} alt="" />
        </div>
        <div className="article-content">
          <h3 className='article-h3'>5 ways to keep a child from danger</h3>
          <p className='article-small-p'>10 mins read</p>
          <p className='article-large-p'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum
          </p>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default Article;

