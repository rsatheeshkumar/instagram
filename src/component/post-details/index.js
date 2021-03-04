import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaUserEdit } from "react-icons/fa";
import Comments from "../comments/index";

import "./index.scss";

const PostsDetails = ({ post }) => {
  // console.log(post.fields.imageurl[0].thumbnails.full.url);
  const image = post.fields.imageurl[0].url;
  // const { full } = post.fields.imageurl[0].thumbnails;

  return (
    <div className="card-group m-5">
      <div className="col">
        <div className="card">
          <img
            src={image}
            width={200}
            height={200}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title d-flex flex-row justify-content-center h-25">
              <AiOutlineLike className="like" />
              <FaRegComment className="comment" />
              <FaUserEdit className="edit" />
            </div>
            <div className="card-text mt-4">
              <Comments />
            </div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsDetails;
