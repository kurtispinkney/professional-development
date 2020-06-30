import React, { Fragment } from "react";

import ArticlesList from "../Components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = () => (
    <Fragment>
    <div id="article-list">
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
    </div>
    </Fragment>
);

export default ArticlesListPage;