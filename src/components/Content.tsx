import * as React from "react";
import Login from "./Login";
import UserApp from "./UserApp";


const ContentComponent = () => {
  return (
    <div className="row">
    <div className="col-md-5 d-none d-md-block">
      <img
        className="img-fluid"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Common_lionfish_at_Shaab_El_Erg_reef.JPG/500px-Common_lionfish_at_Shaab_El_Erg_reef.JPG"
      />
    </div>
    <div className="col-md-7">
      <div className="img-crop-container">
        <img
          className="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/D%C3%BClmen%2C_Kirchspiel%2C_B%C3%B6rnste%2C_Felder_und_B%C3%A4ume_--_2017_--_3220-6.jpg/2560px-D%C3%BClmen%2C_Kirchspiel%2C_B%C3%B6rnste%2C_Felder_und_B%C3%A4ume_--_2017_--_3220-6.jpg"
        />
      </div>

      <Login />
      <UserApp />
    </div>
  </div>
  );
};

export default ContentComponent;
