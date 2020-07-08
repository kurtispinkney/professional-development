import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const ArticlesList = ({ articles }) => (
    
    articles.map(article =>
            <a class="card" href={'article/' + article.name} >
                <div>
                    <h1>{article.title}</h1>
                    <p>{article.summary}</p>
                    <div class="date">{article.date}</div>
                    <div class="tags">
                        <div class="tag">S3, Lambda</div>
                    </div>
                </div>
            </a>
    )
)

export default ArticlesList