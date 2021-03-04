import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchComments from "./action";

const Comments = ({ onComments, onFetchComments }) => {
  useEffect(() => {
    onFetchComments();
  }, [onFetchComments]);
  return (
    <div>
      {onComments.map((el) => {
        return <h6 key={el.id}>{el.fields.comments}</h6>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    onComments: state.comments.comments,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onFetchComments: () => dispatch(fetchComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
