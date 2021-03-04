import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addPost } from "../posts/action";

const AddPost = ({ onAddPosts }) => {
  const [addImage, setImage] = useState("");
  const fileSelect = (e) => {
    const files = e.target.file;
    const data = new FormData();
    data.append("file", files);
    setImage(data);
  };
  return (
    <div className="card h-100 mt-5 ml-5">
      <input type="file" onChange={fileSelect} />
      <button onClick={() => onAddPosts(addImage)}>Upload</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  onAddPosts: (addImage) => dispatch(addPost(addImage)),
});
export default connect(null, mapDispatchToProps)(AddPost);
