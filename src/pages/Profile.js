import React from "react";

function Profile({user}) {

  return (
    <>
      <dd>{user.email}</dd>
      <dd>{user.password}</dd>
      <dd>{user.username}</dd>
      <dd>{user.authenticated}</dd>
    </>
  );
}

export default Profile;