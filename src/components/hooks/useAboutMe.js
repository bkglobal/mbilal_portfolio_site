// import React from "react";

import useSwr from "swr";
import { client } from "client";

const useAboutMe = () => {
  const fetcher = () => {
    return client.getEntries({ content_type: "aboutMe" });
  };

  const { data, error } = useSwr("ABOUT_ME", fetcher);

  return {
    aboutMe: data,
    aboutMeLoading: !error && !data,
    aboutMeError: error,
  };
};

export default useAboutMe;
