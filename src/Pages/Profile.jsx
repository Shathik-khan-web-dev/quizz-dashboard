import React from "react";

const Profile = () => {
  // set the user's data to a variable
  const user = {
    _id: "65dd68d4cec6bbd9b52397e4",
    username: "abilitycoding",
    email: "abilitycoding.edu@gmail.com",
    createdAt: "February 27, 2024",
    experience: 10,
    __typename: "User",
  };

  // get the first letter of the user's username
  const firstLetter = user.username?.charAt(0).toUpperCase();

  return (
    <>
      <span className="fw-bold">Profile</span>

      {/* Banner */}
      <div className="mt-3 banner-container-style bg-primary text-white p-3 rounded-3 mb-4">
        <div className="px-3">
          <h2 className="">Welcome User!</h2>
          <p className="">Your adventure begins here</p>
        </div>
        <div className="banner-bg-style bg-parkay-floor" />

      </div>

      {/* Profile Info */}
      <div className="shadow rounded-3 gap-4 p-3 d-flex align-content-center profile_info  mb-4">
        <div className="profile_uppercase text-white fw-bold">
          {firstLetter}
        </div>
        <div className="text-center mt-4">
          <h5 className="fw-bold">{user.username}</h5>
          <p className="">{`Joined ${user.createdAt}`}</p>
        </div>
      </div>

      {/* Profile Statistics */}
      <div className="shadow rounded-3 gap-4 p-3">
        <h6 className="fw-bold">Statistics</h6>

        <div className="pt-3 d-flex gap-2">
          <h5 className="text-secondary">Total XP:</h5>
          <h5 className="fw-bold">{user.experience}</h5>
        </div>
      </div>
    </>
  );
};

export default Profile;
