import React, { Fragment } from "react";

import ArticlesList from "../Components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = () => (
    <Fragment>
    <h1>Articles</h1>
    < ArticlesList articles={articles} />
    </Fragment>
);

export default ArticlesListPage;