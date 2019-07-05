import React from "react";
import UserPage from "../components/UserPage";

const UserPageContainer = props => {
  return (
    <div>
      {props.users.map(user => {
        return <UserPage key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserPageContainer;
