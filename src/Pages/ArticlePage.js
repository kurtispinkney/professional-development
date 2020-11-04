import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
// import AddCommentForm from "../Components/AddCommentForm";
// import CommentsList from "../Components/CommentsList";
// import UpvotesSection from "../Components/UpvotesSection";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    const { name } = useParams();

    useEffect(() => {
        const fetchArticleInfo = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchArticleInfo();
    }, [name]);

    const matchingArticle = articles.find(article => article.name === name);
 
    return matchingArticle
        ? (
            <Fragment>
            <div id="articles">
                <section>
                    <h1>{matchingArticle.title}</h1>
                    {matchingArticle.content.map((paragraph, i) => (
                        <p className="container" key={i}>{paragraph}</p>
                    ))}
                {/* <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                <CommentsList comments={articleInfo.comments} /> */}
                </section>
            </div>
            </Fragment>
        ) : (
            <NotFoundPage></NotFoundPage>
        );
};

export default ArticlePage;