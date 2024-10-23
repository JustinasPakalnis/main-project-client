import styleTemplate from "./RegistrationTemplate.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserListContext } from "../../context/UserListContext";

import ButtonBig from "../buttons/ButtonBig.jsx";

const RegistrationTemplate = () => {
  const navigate = useNavigate();
  const {
    userTemplate,
    handleInputChange,
    handleCreateUser,
    handleRegistrationFormClear,
  } = useContext(UserListContext);
  const { usersFullNames } = useContext(UserListContext);

  return (
    <section>
      <form
        className={styleTemplate.registrationForm}
        onSubmit={handleCreateUser}
      >
        <h2 className={styleTemplate.title}>New User Registration</h2>

        {/* Main grid container */}
        <div className={styleTemplate.formGrid}>
          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>First Name:</label>
            <input
              className={styleTemplate.field}
              name="firstName"
              type="text"
              value={userTemplate.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Last Name:</label>
            <input
              className={styleTemplate.field}
              name="lastName"
              type="text"
              value={userTemplate.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>User Status:</label>
            <select
              className={styleTemplate.field}
              name="userstatus"
              value={userTemplate.userstatus}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select User Status
              </option>
              <option value="Employee">Employee</option>
              <option value="Former Employee">Former Employee</option>
              <option value="Candidate">Candidate</option>
            </select>
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Password:</label>
            <input
              className={styleTemplate.field}
              name="password"
              type="text"
              value={userTemplate.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Type:</label>
            <select
              className={styleTemplate.field}
              name="type"
              value={userTemplate.type}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="SuperAdmin">SuperAdmin</option>
            </select>
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Salary:</label>
            <input
              className={styleTemplate.field}
              name="salary"
              type="number"
              value={userTemplate.salary}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Phone Contact:</label>
            <input
              className={styleTemplate.field}
              name="phone"
              type="tel"
              value={userTemplate.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Position:</label>
            <input
              className={styleTemplate.field}
              name="position"
              type="text"
              value={userTemplate.position}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Qualification:</label>
            <input
              className={styleTemplate.field}
              name="qualification"
              type="text"
              value={userTemplate.qualification}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Nationality:</label>
            <input
              className={styleTemplate.field}
              name="nationality"
              type="text"
              value={userTemplate.nationality}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Gender:</label>
            <select
              className={styleTemplate.field}
              name="gender"
              value={userTemplate.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Employment Type:</label>
            <select
              className={styleTemplate.field}
              name="employment_type"
              value={userTemplate.employment_type}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Date of Birth:</label>
            <input
              className={styleTemplate.field}
              type="date"
              onChange={handleInputChange}
              name="date_of_birth"
              value={userTemplate.date_of_birth}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Date of Hire:</label>
            <input
              className={styleTemplate.field}
              type="date"
              onChange={handleInputChange}
              name="date_of_hire"
              value={userTemplate.date_of_hire}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Email:</label>
            <input
              className={styleTemplate.field}
              name="email"
              type="text"
              value={userTemplate.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Work Location:</label>
            <input
              className={styleTemplate.field}
              name="work_location"
              type="text"
              value={userTemplate.work_location}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Notes:</label>
            <textarea
              className={styleTemplate.field}
              value={userTemplate.notes}
              onChange={handleInputChange}
              name="notes"
              required
              maxLength="200"
              placeholder="Write your comment here"
            />
          </div>

          <div className={styleTemplate.formGroup}>
            <label className={styleTemplate.label}>Select Supervisor:</label>
            <select
              className={styleTemplate.field}
              name="supervisor_id"
              value={userTemplate.supervisor_id}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select user
              </option>
              {usersFullNames.map((user, index) => (
                <option key={index} value={parseInt(user.id)}>
                  {user.fullName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons for registration and clearing the form */}
        <div className={styleTemplate.buttonContainer}>
          <ButtonBig text={"Register"} type="submit" />
          <ButtonBig
            text={"Clear"}
            type="button"
            onClick={handleRegistrationFormClear}
          />
        </div>
      </form>
    </section>
  );
};

export default RegistrationTemplate;
