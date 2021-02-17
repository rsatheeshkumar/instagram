import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaListUl, FaRegComment, FaUserEdit } from "react-icons/fa";

import "./index.scss";

const PostsDetails = ({ post }) => {
  // console.log(post.fields.imageurl[0].thumbnails.full.url);
  // const image = post.fields.imageurl[0].thumbnails.full.url;
  const { full } = post.fields.imageurl[0].thumbnails;
  return (
    <div className="card-group m-5">
      <div className="col">
        <div className="card">
          <img
            src={full.url}
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
            <p className="card-text mt-4">
              This is a wider card with supporting text.
            </p>
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
