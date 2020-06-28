import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
// import AddCommentForm from "../components/AddCommentForm";
// import CommentsList from "../components/CommentsList";
// import UpvotesSection from "../components/UpvotesSection";
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
                <h1>{matchingArticle.title}</h1>
                {matchingArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            {/* <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} /> */}
            </Fragment>
        ) : (
            <NotFoundPage></NotFoundPage>
        );
};

export default ArticlePage;