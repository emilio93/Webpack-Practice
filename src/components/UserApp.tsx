import * as React from "react";
import { FormEvent, useState } from "react";

const UserAppComponent = () => {
  const [history, setHistory] = useState<string[] | undefined>([""]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setHistory((prevHistory) => {
      if (!hasStarted) {
        setHasStarted(true);
        return [newValue];
      }
      return [newValue, ...prevHistory];
    });
  };

  return (
    <div className="col-md-7" id="welcome-panel" style={{ display: "none" }}>
      <h2>Welcome</h2>
      <p>You have logged in.</p>
      <div className="mb-3 d-grid gap-2">
        <button className="btn btn-danger btn-lg" id="logout-button">
          Logout
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Type text here"
          value={history[0]}
          onChange={handleChange}
        />
        <ul className="list-unstyled">
          {hasStarted
            ? history.map((item, index) => <li key={index}>{item}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default UserAppComponent;
