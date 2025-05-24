import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Finds all the mentors that can teach the given module.
 */
const possibleMentorsForModule = (moduleName) => {
  return mentors.filter(mentor => mentor.canTeach.includes(moduleName))

};

console.log("Possible mentors for 'using-apis':", possibleMentorsForModule("using-apis"));

/**
 * Chooses a random mentor to teach the given module.
 */
const findMentorForModule = (moduleName) => {
  const possibleMentors = possibleMentorsForModule(moduleName);
  if (possibleMentors.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * possibleMentors.length);
  return possibleMentors[randomIndex];
};

console.log("Random mentor for 'javascript':", findMentorForModule("javascript"));

export { possibleMentorsForModule, findMentorForModule };
