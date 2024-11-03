import { useContext, useEffect, useState } from "react";
import profile1 from "../../assets/profile1.png";
import { UserListContext } from "../../context/UserListContext";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext";
import style from "./PersonellList.module.css";
import EmployeeDetails from "./EmployeeDetails.jsx";
import EmployeeComments from "./EmployeeComments.jsx";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
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
  const [selectedEmployeeToComment, setSelectedEmployeeToComment] = useState(
    []
  );
  const [selectedList, setSelectedList] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState(users[0]);
  const [mapingList, setMapingList] = useState(users);

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
    setSelectedEmployee(users[0]);
  }, []);

  return (
    <>
      <section className={style.usersListContainer}>
        <h1 className={style.headerTitle}>Porsonell list</h1>
        <div className={style.commentBox} data-visible={userCommentFieldOpen}>
          {selectedEmployeeToComment && (
            <p>
              Comment something about: {selectedEmployeeToComment.firstName}{" "}
              {selectedEmployeeToComment.lastName}
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
            {mapingList.map((employee, index) => (
              <div
                className={style.line}
                key={employee.id}
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
                    {employee.firstName + " " + employee.lastName}
                  </p>
                  <p className={style.nr1}>{employee.position}</p>
                  <p className={style.nr8}>{employee.email}</p>
                  <p className={style.nr6}>{employee.phone}</p>
                  <div className={style.buttons}>
                    {authorizedUser.userID !== employee.id ? (
                      <ButtonSmall
                        onClick={() => {
                          handleUserCommentMenu(employee.id);
                          setSelectedEmployeeToComment(employee);
                        }}
                        text={"Comment"}
                      ></ButtonSmall>
                    ) : null}
                    <ButtonSmall
                      onClick={() => fetchUserComments(employee.id, index)}
                      text={userListCommentID === index ? "Close" : "Get"}
                    ></ButtonSmall>
                    <ButtonSmall
                      onClick={() => setSelectedEmployee(employee)}
                      text={"More"}
                    ></ButtonSmall>
                  </div>
                </li>
                <EmployeeComments
                  userComments={userComments}
                  userListCommentID={userListCommentID}
                  index={index}
                ></EmployeeComments>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <EmployeeDetails
        employee={selectedEmployee}
        users={users}
      ></EmployeeDetails>
    </>
  );
};

export default PersonellList;
