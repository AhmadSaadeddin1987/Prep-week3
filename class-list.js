import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const cls = classes.find(c => c.name === className);
  if (!cls) return [];

  const classStudents = students
    .filter(student => student.class === className)
    .map(student => ({ name: student.name, role: 'student' }));

  const classMentors = mentors
    .filter(mentor => mentor.nowTeaching === cls.currentModule)
    .map(mentor => ({ name: mentor.name, role: 'mentor' }));

  return [...classStudents, ...classMentors];
};

console.log("People in class34:", getPeopleOfClass("class34"));

const getActiveClasses = () => {
  const result = {};
  classes
    .filter(cls => cls.active)
    .forEach(cls => {
      result[cls.name] = getPeopleOfClass(cls.name);
    });
  return result;
};

console.log("Active classes:", getActiveClasses());
