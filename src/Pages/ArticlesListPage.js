import React, { Fragment } from "react";

import ArticlesList from "../Components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = () => (
<Fragment>
    <div id="article-list">
        <h1>Articles
          <a class="btn" href="/">
             <i class="fa fa-home"></i> 
          </a> 
         </h1>
        <section class="cards-wrapper">
            <ArticlesList articles={articles} />
       </section>
    </div>
    </Fragment>
);

export default ArticlesListPage;