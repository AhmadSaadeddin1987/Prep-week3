import { possibleMentorsForModule, findMentorForModule } from "./find-mentors.js";

describe("Mentor Finder", () => {
  test("should return all mentors for 'using-apis'", () => {
    const result = possibleMentorsForModule("using-apis");
    expect(result).toEqual(expect.arrayContaining(["Stas", "Andrej", "Yash", "Collin"]));
  });

  test("should return a random mentor for 'javascript'", () => {
    const mentor = findMentorForModule("javascript");
    expect(["Stas", "Yash", "Rohan"]).toContain(mentor);
  });

  test("should return null for unknown module", () => {
    expect(findMentorForModule("not-a-real-module")).toBe(null);
  });
});
