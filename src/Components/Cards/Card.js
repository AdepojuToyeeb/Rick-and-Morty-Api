// ADD PROPERTIES TO THIS FILE.

import React from "react";
/* ----------------------------
THis is the JSX of how I want the Cards to look like and what props we want to pass into each Card!

Properties we get from the API:
- ID
- Name
- Image
- Status (Alive/Dead)
- Species
- Gender
- Origin
- Last Location

------------------------------*/

const Card = (props) => {
  return (
    <div className="card-parent">
      <p className ='Card-id'>Name: {props.character.name} </p>
      <img src= {props.character.image} alt = {props.character.name}/>
      {/*I'll Still Need to use these Properties later:
            - Gender
            - Status
            - Species */}
    </div>
  );
};

export default Card;
