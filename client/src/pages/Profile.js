import React, { useState } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import { UPDATE_PROFILE, DELETE_USER } from "../utils/mutations";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [updateProfile, { error }] = useMutation(UPDATE_PROFILE);
  const [deleteUser, { error: deleteError }] = useMutation(DELETE_USER);
  // const [login, { error, data: updateUser }] = useMutation(UPDATE_PROFILE, DELETE_USER);
  console.log(data);

  const user = data?.me || data?.username || {};
  console.log(user);
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // Removed so I can modify the profile form - Not getting data.username :(
  if (!user?.username) {
    return (
      <div>
        <h4>You need to be logged in to see this</h4>
        <h4> Use the navigation links above to sign up or log in!</h4>
      </div>
    );
  }

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
      const { data } = await updateProfile({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await deleteUser({
        variables: { ...formState },
      });
      console.log(`this worked`)
      Auth.logout();
      window.location.assign("/");
    } catch (e) {
      console.error(e);
    }
    
  };

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5"></div>
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="center-title card-header bg-dark text-light p-2">
                Profile Details
              </h4>

              <h5>
                Username: {user.username} {""}
              </h5>
              <h5>
                Email: {user.email} {""}
              </h5>
              <h1>MotivScore: 16,800 {""}</h1>
              <h1>Current MotivPoints: 🏃💰2,400</h1>

              <div className="card-body">
                <h4>Update Username</h4>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
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
                  <button onClick={handleDelete} className="button is-danger">
                    Delete User!
                  </button>
                </form>

                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
