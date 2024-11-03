import { useContext, useEffect, useState } from "react";
import profile1 from "../../assets/profile1.png";
import gandalf from "../../assets/gandalf.png";
import { UserListContext } from "../../context/UserListContext";
import { GlobalContext } from "../../context/GlobalContext";
import { LoginContext } from "../../context/LoginContext";
import style from "./EmployeeDetails.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
const EmployeeDetails = ({ employee, users }) => {
  const { usersFullNames } = useContext(UserListContext);
  // const employee = users[0];
  console.log(employee);
  // console.log(users);

  return (
    <>
      <section className={style.selectedEmplyeeDetails}>
        <div className={style.keyDetails}>
          <div className={style.profilePic}>
            <img src={employee.id === 24 ? gandalf : profile1} alt="Userpic" />
          </div>
          <div className={style.title}>
            <h2 className={style.employeeName}>
              {employee.firstName + " " + employee.lastName + " "}
              {new Date().getFullYear() -
                new Date(employee.date_of_birth).getFullYear()}
            </h2>
            <div className={style.mainDetails}>
              <p>{employee.position}</p> {" | "}
              <p>{employee.employment_type}</p>
            </div>
          </div>
          <div className={style.contacts}>
            <div className={style.contact}>
              <AiOutlinePhone />
              <p>{employee.phone}</p>
            </div>
            <div className={style.contact}>
              <AiOutlineMail />
              <p>{employee.email}</p>
            </div>
          </div>
        </div>
        <div className={style.moreDetails}>
          <h3 className={style.detailsTitle}>More Details</h3>
          <ul className={style.detailsList}>
            <li className={style.detail}>
              <p>Date of Birth:</p>
              <span>{employee.date_of_birth.slice(0, 10)}</span>
            </li>
            <li className={style.detail}>
              <p>Date of Hire:</p>
              <span>{employee.date_of_hire.slice(0, 10)}</span>
            </li>
            <li className={style.detail}>
              <p>Gender:</p>
              <span>{employee.gender}</span>
            </li>
            <li className={style.detail}>
              <p>Nationality:</p>
              <span>{employee.nationality}</span>
            </li>
            <li className={style.detail}>
              <p>Qualification:</p>
              <span>{employee.qualification}</span>
            </li>
            <li className={style.detail}>
              <p>Supervisor:</p>
              {usersFullNames.map((name, index) =>
                name.id === employee.supervisor_id ? (
                  <span key={name.id}>{name.fullName}</span>
                ) : null
              )}
            </li>
            <li className={style.detail}>
              <p>Status:</p>
              <span>{employee.userstatus}</span>
            </li>
            <li className={style.detail}>
              <p>Work Location:</p>
              <span>{employee.work_location}</span>
            </li>
          </ul>
          <div className={style.notes}>
            <h2>Notes</h2>
            <p>{employee.notes || "..."}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeDetails;
