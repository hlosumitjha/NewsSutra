import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import LoaderStyle from './LoaderStyle';
import '../components/Responsive.css'

const NewsBoard = ({category}) => {
    
    // const [categories, setCategories] = useState("general");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&apikey=${import.meta.env.VITE_API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div className="container my-3">
            <div className="d-flex align-items-center justify-content-center gap-3">
                <h3 className="my-3">
                    News <span className="badge text-bg-danger">Live</span>
                </h3>
                <LoaderStyle />
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-5"> {/* Bootstrap grid to create 4-column layout */}
                {articles.map((news, index) => (
                    <NewsCard
                        key={index}
                        title={news.title}
                        description={news.description}
                        image={news.image}
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsBoard;
