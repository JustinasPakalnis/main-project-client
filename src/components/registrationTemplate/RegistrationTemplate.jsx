import styleTemplate from "./RegistrationTemplate.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserListContext } from "../../context/UserListContext";
import profile1 from "../../assets/profile1.png";
import ButtonBig from "../buttons/ButtonBig.jsx";

const RegistrationTemplate = () => {
  const navigate = useNavigate();
  const {
    userTemplate,
    handleInputChange,
    handleCreateUser,
    handleRegistrationFormClear,
    registrationSucces,
    handleRegistrationSucces,
    usersFullNames,
  } = useContext(UserListContext);

  return (
    <>
      <section className={styleTemplate.registrationForm}>
        <div
          className={styleTemplate.message}
          data-lightbox={registrationSucces}
        >
          <h2>Registration has been succesful</h2>
        </div>
        <div className={styleTemplate.profilePic}>
          <img src={profile1} alt="Userpic" />
        </div>
        <form className={styleTemplate.form} onSubmit={handleCreateUser}>
          <div className={styleTemplate.formMain}>
            <div className={styleTemplate.formSection}>
              <h3 className={styleTemplate.sectionTitle}>
                Personal Information
              </h3>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>First Name:</label>
                <input
                  className={styleTemplate.field}
                  name="firstName"
                  type="text"
                  value={userTemplate.firstName}
                  onChange={handleInputChange}
                  required
                  maxLength="20"
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
                  maxLength="20"
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
                  maxLength="45"
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
                  maxLength="45"
                />
              </div>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>Date of Birth:</label>
                <input
                  className={styleTemplate.field}
                  type="date"
                  name="date_of_birth"
                  value={userTemplate.date_of_birth}
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
                  maxLength="10"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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
                  maxLength="50"
                />
              </div>
            </div>

            <div className={styleTemplate.formSection}>
              <h3 className={styleTemplate.sectionTitle}>Job Information</h3>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>Position:</label>
                <input
                  className={styleTemplate.field}
                  name="position"
                  type="text"
                  value={userTemplate.position}
                  onChange={handleInputChange}
                  required
                  maxLength="100"
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
                  maxLength="20"
                />
              </div>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>Employment Type:</label>
                <select
                  className={styleTemplate.field}
                  name="employment_type"
                  value={userTemplate.employment_type}
                  onChange={handleInputChange}
                  required
                  maxLength="50"
                >
                  <option value="" disabled>
                    Select Type
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
                <label className={styleTemplate.label}>Date of Hire:</label>
                <input
                  className={styleTemplate.field}
                  type="date"
                  name="date_of_hire"
                  value={userTemplate.date_of_hire}
                  onChange={handleInputChange}
                  required
                />
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
                <label className={styleTemplate.label}>Work Location:</label>
                <input
                  className={styleTemplate.field}
                  name="work_location"
                  type="text"
                  value={userTemplate.work_location}
                  onChange={handleInputChange}
                  required
                  maxLength="100"
                />
              </div>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>
                  Select Supervisor:
                </label>
                <select
                  className={styleTemplate.field}
                  name="supervisor_id"
                  value={userTemplate.supervisor_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Supervisor
                  </option>
                  {usersFullNames.map((user, index) => (
                    <option key={index} value={parseInt(user.id)}>
                      {user.fullName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styleTemplate.formSection}>
              <h3 className={styleTemplate.sectionTitle}>
                Account Information
              </h3>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>Password:</label>
                <input
                  className={styleTemplate.field}
                  name="password"
                  type="password"
                  value={userTemplate.password}
                  onChange={handleInputChange}
                  required
                  maxLength="20"
                />
              </div>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>Status:</label>
                <select
                  className={styleTemplate.field}
                  name="userstatus"
                  value={userTemplate.userstatus}
                  onChange={handleInputChange}
                  required
                  maxLength="20"
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="Employee">Employee</option>
                  <option value="Former Employee">Former Employee</option>
                  <option value="Candidate">Candidate</option>
                </select>
              </div>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>Account role:</label>
                <select
                  className={styleTemplate.field}
                  name="type"
                  value={userTemplate.type}
                  onChange={handleInputChange}
                  required
                  maxLength="20"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                </select>
              </div>
              <div className={styleTemplate.formGroup}>
                <label className={styleTemplate.label}>
                  Extra notes about employee:
                </label>
                <textarea
                  className={styleTemplate.field}
                  name="notes"
                  value={userTemplate.notes}
                  onChange={handleInputChange}
                  maxLength="200"
                  placeholder="Write your comment here"
                  required
                />
              </div>
            </div>
          </div>

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
    </>
  );
};

export default RegistrationTemplate;
