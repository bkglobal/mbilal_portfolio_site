import React, { createContext, useState } from "react";
import useAboutMe from "components/hooks/useAboutMe";

export const UserInfoContext = createContext({});

const UserInfoProvider = ({ children }) => {
  const { aboutMe, aboutMeLoading, aboutMeError } = useAboutMe();

  // console.log("aboutMe", aboutMe);

  return (
    <UserInfoContext.Provider
      value={{
        aboutMe,
        aboutMeLoading,
        aboutMeError,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
