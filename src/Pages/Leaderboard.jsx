import React from "react";

const Leaderboard = () => {
  // get the user data from the server

  // all user from db

  // set the user data to a variable
  const users = [
    {
      _id: "65dd68d4cec6bbd9b52397e4",
      username: "abilitycoding",
      email: "abilitycoding.edu@gmail.com",
      createdAt: "February 27, 2024",
      experience: 100,
      __typename: "User",
    },
    {
      _id: "65dd68d4cec6bbd9b52397e5",
      username: "User_2",
      email: "abilitycoding.edu@gmail.com",
      createdAt: "February 27, 2024",
      experience: 200,
      __typename: "User",
    },
    {
      _id: "65dd68d4cec6bbd9b51397e5",
      username: "User_3",
      email: "abilitycoding.edu@gmail.com",
      createdAt: "February 27, 2024",
      experience: 10,
      __typename: "User",
    },
  ];

  // sort the users by experience
  const sortedUsers = [...users].sort((a, b) => b.experience - a.experience);

  // style the first three rankings
  const rank = (index) => {
    switch (index) {
      case 0:
        return "ranking-first-style";
      case 1:
        return "ranking-second-style";
      case 2:
        return "ranking-third-style";
      default:
        return "";
    }
  };
  return (
    <>
      <span className="fw-bold">Leaderboards</span>

      {/* Banner */}
      <div className="mt-3 banner-container-style bg-success text-white p-3 rounded-3 mb-3">
        <div className="px-3 position-relative">
          <h2 className="">Rise to the top!</h2>
          <p className="">Be the best and compete with others.</p>
        </div>
        <div className="banner-bg-style bg-connections" />
      </div>

      {/* Leaderboard table */}
      <div className="rounded-3 shadow p-3">
        <span className="mb-5 fw-bold">Rankings</span>

        <div className="d-flex flex-column pt-3">
          {sortedUsers.map((user, index) => (
            <div key={`id-${user._id}`} className="d-flex  gap-3  mb-3 mx-3">
              <span className={`ranking_index ${rank(index)}`}>
                {index + 1}
              </span>

              <div className="pt-2">
                <div className="bg-danger rounded-circle text-white fw-bold fs-5 ranking_uppercase">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
              </div>

              <div className="overflow-hidden ">
                <span className="fw-bold">{user.username}</span>
                <p className="text-secondary ranking_xp">
                  {user.experience} XP
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
