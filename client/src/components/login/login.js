export default function login() {
  return (
    <div>
      <form class="form login-form">
        <div class="form-group">
          <label for="username-login">Username:</label>
          <input class="form-input" type="text" id="username-login" />
        </div>
        <div class="form-group">
          <label for="password-login">password:</label>
          <input
            class="form-input"
            type="password"
            name="password"
            id="password-login"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">
            login
          </button>
        </div>
        <div class="form-group">
          <a href="/">
            <button class="btn btn-primary" type="button">
              Home
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}
