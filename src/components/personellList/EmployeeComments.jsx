import style from "./PersonellList.module.css";

const EmployeeComments = ({ userComments, userListCommentID, index }) => {
  return (
    <>
      {userComments.map((com) => (
        <div
          className={style.userComment}
          key={com.id}
          data-visible={userListCommentID === index}
        >
          <p>Commented by: {com.author}</p>
          <p>{com.commentDate.split("T").join(" ").slice(0, 16)}</p>
          <p>{com.comment}</p>
        </div>
      ))}
    </>
  );
};

export default EmployeeComments;
