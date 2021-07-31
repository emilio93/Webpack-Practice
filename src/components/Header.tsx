import * as React from "react";

const logoStyle = {
  maxHeight: 64,
  marginRight: 5
};
const HeaderComponent = () => {
  return (
    <div>
      <div className="row d-none d-md-block">
        <div className="col-md-12">
          <div className="page-header">
            <h1>
              <img
                style={logoStyle}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
              />
              <img
                style={logoStyle}
                src="https://cdn.onlinewebfonts.com/svg/img_435950.png"
              />
              Bootstrap & jQuery
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
