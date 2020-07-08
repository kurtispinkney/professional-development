import React, { Fragment } from "react";

const CommentsList = ({comments}) => (
    <Fragment id="articles"> 
    <h3>Comments:</h3>
    {comments.map((comment, i) => (
        <div className="container" key={i}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </Fragment>
);

export default CommentsList;