import React from "react";

export default function signup() {
  return (
    <div>
      <h2 class="page-title">Signup</h2>
      <form class="form signup-form">
        <div class="form-group">
          <label for="username-signup">Username:</label>
          <input
            class="form-input"
            type="text"
            name="username"
            id="username-signup"
            required
          />
        </div>
        <div class="form-group">
          <label for="email-signup">Email:</label>
          <input
            class="form-input"
            type="text"
            name="email"
            id="email-signup"
            required
          />
        </div>
        <div class="form-group">
          <label for="password-signup">Password:</label>
          <input
            class="form-input"
            type="password"
            name="password"
            id="password-signup"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary" type="submit" id="submit">
            signup
          </button>
        </div>
      </form>
      <a href="/">
        <button class="btn btn-primary" type="button">
          Home
        </button>
      </a>
    </div>
  );
}
