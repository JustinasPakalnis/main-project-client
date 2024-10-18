import { useContext, useEffect, useState } from "react";
import { UserListContext } from "../../context/UserListContext";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext";
import style from "./PersonellList.module.css";
const PersonellList = () => {
  const {
    users,
    handlefieldChange,
    userComment,
    handleCreateUserComment,
    fetchUserComments,
    userComments,
    handleUserCommentMenu,
    userCommentFieldOpen,
    handleUserCommentMenuClose,
    userCommentID,
    userListCommentID,
    setUserListCommentID,
  } = useContext(UserListContext);

  const { authorizedUser } = useContext(LoginContext);
  const selectedUser = users.find((user) => user.id === userCommentID);
  const [selectedList, setSelectedList] = useState("All");
  const [mapingList, setMapingList] = useState(users);
  function handleSelectList(e) {
    setUserListCommentID(null);
    setSelectedList(e.target.value);
  }
  useEffect(() => {
    setMapingList(users);
  }, []);
  useEffect(() => {
    selectedList === "All"
      ? setMapingList(users)
      : setMapingList(users.filter((user) => user.userstatus === selectedList));
  }, [selectedList]);

  return (
    <>
      <section className={style.usersListContainer}>
        <h1 className={style.headerTitle}>Porsonell list</h1>
        <div className={style.commentBox} data-visible={userCommentFieldOpen}>
          {selectedUser && (
            <p>
              Comment something about: {selectedUser.firstName}
              {selectedUser.lastName}
            </p>
          )}
          <textarea
            className={style.inputComment}
            value={userComment}
            placeholder="Write your comment here"
            onChange={handlefieldChange}
            name="comment"
            required
            maxLength="200"
          />
          <span className={style.letterCount}>
            Symbols left: {200 - userComment.length}
          </span>
          <div className={style.btnBlock}>
            <button
              onClick={(e) =>
                handleCreateUserComment(
                  e,
                  userComment,
                  userCommentID,
                  authorizedUser
                )
              }
              className={style.commentButton}
            >
              Send
            </button>
            <button
              onClick={handleUserCommentMenuClose}
              className={style.commentButton}
            >
              Close
            </button>
          </div>
        </div>
        <div className={style.listContainer}>
          <ul className={style.list}>
            <div className={style.headerRow}>
              <p className={style.nr1AndSelect}>
                Name{" "}
                <select
                  className={style.field}
                  name="List"
                  value={selectedList}
                  onChange={handleSelectList}
                  required
                >
                  <option value="All" default>
                    All employees
                  </option>
                  <option value="Employed">Active Employees</option>
                  <option value="Former Employee">Former Employees</option>
                  <option value="Candidate">Candidates</option>
                </select>
              </p>
              <p className={style.nr1}>User status</p>
              <p className={style.nr1}>Email addres</p>
              <p className={style.nr1}>User Type</p>
            </div>
            {mapingList.map((users, index) => (
              <div
                className={style.line}
                key={users.id}
                data-visible={userListCommentID === index}
              >
                <li
                  className={
                    index % 2 === 0
                      ? style.listItem
                      : `${style.listItem} ${style.listItem2}`
                  }
                >
                  <p className={style.nr1}>
                    {users.firstName + " " + users.lastName}
                  </p>
                  <p className={style.nr1}>{users.userstatus}</p>
                  <p className={style.nr1}>{users.email}</p>
                  <p className={style.nr1}>{users.type}</p>
                  <div className={style.buttons}>
                    {authorizedUser.firstName +
                      " " +
                      authorizedUser.lastName !==
                    users.firstName + " " + users.lastName ? (
                      <button
                        onClick={() => handleUserCommentMenu(users.id)}
                        className={style.button}
                      >
                        Comment
                      </button>
                    ) : null}
                    <button
                      onClick={() => fetchUserComments(users.id, index)}
                      className={style.button}
                    >
                      {userListCommentID === index ? "Close" : "Get"}
                    </button>
                  </div>
                </li>
                <div>
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
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PersonellList;
