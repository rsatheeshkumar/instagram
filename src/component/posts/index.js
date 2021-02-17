import React, { useEffect } from "react";
import { connect } from "react-redux";
import PostsDetails from "../post-details";
import fetchPosts from "./action";

const Posts = ({ onPostRequest, posts }) => {
  useEffect(() => {
    onPostRequest();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {posts.map((post) => (
        <PostsDetails key={post.id} post={post} />
      ))}
    </div>
  );
};
const mapStateProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPostRequest: () => dispatch(fetchPosts()),
});

export default connect(mapStateProps, mapDispatchToProps)(Posts);
