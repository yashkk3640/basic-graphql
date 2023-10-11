const students = [
  { id: "1", name: "Yash", std: 10, marks: [91, 92, 95] },
  { id: "2", name: "Dhruv", std: 8, marks: [90, 91, 94] },
  { id: "3", name: "Harsh", std: 8, marks: [78, 91, 93] },
  { id: "4", name: "Bhavesh", std: 10, marks: [90, 93, 95] },
];

const subjects = [
  { id: "1", name: "Maths", isLanguage: false },
  { id: "2", name: "Science", isLanguage: false },
  { id: "3", name: "Gujarati", isLanguage: true },
  { id: "4", name: "Hindi", isLanguage: true },
  { id: "5", name: "Computer", isLanguage: false },
];

const faculties = [
  { id: "1", name: "Rakesh Sir", occupation: "Supervisor", sub_id: "1" },
  { id: "2", name: "Jayesh Sir", occupation: "Counselor", sub_id: "2" },
  { id: "3", name: "Nimesh Sir", occupation: "Assistance", sub_id: "5" },
  { id: "4", name: "Vidya Ma'am", occupation: "Lecturer", sub_id: "4", std: 10 },
  { id: "5", name: "Savita Ma'am", occupation: "Lecturer", sub_id: "3", std:8 },
];

const studentMark = [
  { studId: "1", subId: "1", mark: 81 },
  { studId: "1", subId: "2", mark: 71 },
  { studId: "1", subId: "3", mark: 91 },
  { studId: "2", subId: "1", mark: 82 },
  { studId: "2", subId: "2", mark: 72 },
  { studId: "2", subId: "3", mark: 92 },
  { studId: "3", subId: "1", mark: 83 },
  { studId: "3", subId: "2", mark: 73 },
  { studId: "3", subId: "3", mark: 93 },
  { studId: "4", subId: "1", mark: 84 },
  { studId: "4", subId: "2", mark: 74 },
  { studId: "4", subId: "3", mark: 94 },
];

export default { students, subjects, faculties, studentMark };
