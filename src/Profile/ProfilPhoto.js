import React from "react";
import IMAGE from "./image/image1.PNG";
const ProfilPhoto = () => {
  return (
    <div>
      <img src="image1.PNG" alt="" style={{ width: "30%" }} />

      <img src={IMAGE} alt="" style={{ width: "30%" }} />
    </div>
  );
};

export default ProfilPhoto;
