import { useContext, useEffect, useState } from "react";
import profile1 from "../../assets/profile1.png";
import { UserListContext } from "../../context/UserListContext";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext";
import style from "./PersonellList.module.css";
import EmployeeDetails from "./EmployeeDetails.jsx";
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
    usersFullNames,
  } = useContext(UserListContext);

  const { authorizedUser } = useContext(LoginContext);
  const selectedUser = users.find((user) => user.id === userCommentID);
  const [selectedList, setSelectedList] = useState("All");
  const [mapingList, setMapingList] = useState(users);
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  function handleSelectList(e) {
    setUserListCommentID(null);
    setSelectedList(e.target.value);
  }
  useEffect(() => {
    setMapingList(users);
  }, [users]);
  useEffect(() => {
    selectedList === "All"
      ? setMapingList(users)
      : setMapingList(users.filter((user) => user.userstatus === selectedList));
  }, [selectedList]);

  useEffect(() => {
    setSelectedEmployee([users[0]]);
  }, []);

  function selectEmployee(id) {
    const foundEmployee = users.find((employees) => employees.id === id);
    if (foundEmployee) {
      setSelectedEmployee([foundEmployee]);
    }
  }

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
              <p className={style.nr1}>Position</p>
              <p className={style.nr8}>Email addres</p>
              <p className={style.nr6}>Contact</p>
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
                  <p className={style.nr1}>{users.position}</p>
                  <p className={style.nr8}>{users.email}</p>
                  <p className={style.nr6}>{users.phone}</p>
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
                    <button
                      onClick={() => selectEmployee(users.id)}
                      className={style.button}
                    >
                      More
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
      <EmployeeDetails selectedEmployee={selectedEmployee}></EmployeeDetails>
    </>
  );
};

export default PersonellList;
