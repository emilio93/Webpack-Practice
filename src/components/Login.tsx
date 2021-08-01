import * as React from "react";

const LoginComponent = () => {
  return (
    <div id="login-panel">
      <h2>Welcome</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailFormControlInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-lg"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <div className="mb-3 d-grid gap-2">
          <input
            type="submit"
            className="btn btn-primary btn-lg"
            id="login-button"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
