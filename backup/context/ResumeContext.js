import { createContext, useContext } from "react";

export const ResumeContext = createContext({
  general: {},
  education: [],
  experience: [],
});
export const ResumeProvider = ResumeContext.Provider;

export const useResume = () => {
  return useContext(ResumeContext);
};
