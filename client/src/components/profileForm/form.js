import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_PROFILE, DELETE_USER } from "../utils/mutations";
import "./form.css";

const ProfileForm = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data: updateUser }] = useMutation(
    UPDATE_PROFILE,
    DELETE_USER
  );

  const [updateProfile, { error: profileError }] = useMutation(UPDATE_PROFILE);
  const [deleteUser, { error: deleteError }] = useMutation(DELETE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="card-body">
      <h4>Update Email</h4>
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <h4>Update Password</h4>
        <input
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button
          className="button is-success btn-block btn-primary"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Submit
        </button>
      </form>

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ProfileForm;
