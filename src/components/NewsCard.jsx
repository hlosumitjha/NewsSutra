import React from 'react';
import imageBroke from '../assets/News.jpg'
import '../components/Responsive.css'

const NewsCard = ({ title, description, image, url }) => {
    return (
        <div className="col"> {/* This col will allow proper grid layout when used inside a parent row */}
            <div id='name' className="card text-light d-inline-block m-1 p-2">
                <img src={image?image:imageBroke} className="card-img-top mx-1 my-0" alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description.slice(0, 100)}</p>
                    <a href={url} target={'_blank'} className="btn btn-light" style={{ position: 'absolute', bottom: '10px', width: '90%', marginLeft:"-10px" }}>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
