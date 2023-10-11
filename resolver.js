import db from "./_db.js";

export const resolvers = {
  Query: {
    students() {
      return db.students;
    },
    student(parent, args, context) {
      return db.students.find((s) => s.id === args.id);
    },
    subjects() {
      return db.subjects;
    },
    subject(parent, args, context) {
      return db.subjects.find((s) => s.id === args.id);
    },
    faculties() {
      return db.faculties;
    },
    faculty(parent, args, context) {
      return db.faculties.find((f) => f.id === args.id);
    },
  },

  Faculty: {
    subject(parent, args) {
      return db.subjects.find((s) => s.id === parent.sub_id);
    },
  },
  Subject: {
    faculty(parent, args) {
      return db.faculties.find((f) => f.sub_id === parent.id);
    },
    highestMark(parent, args) {
      const highestMark = db.studentMark.reduce(
        (hm, sm) => {
          if (sm.subId === parent.id && sm.mark > hm.mark) {
            return sm;
          }
          return hm;
        },
        { mark: 0 }
      );
      return {
        studName: db.students.find((s) => s.id === highestMark.studId).name,
        mark: highestMark.mark,
      };
    },
  },
  Student: {
    marks(parent, args) {
      return db.studentMark
        .filter((sm) => sm.studId === parent.id)
        .map((sm) => ({
          subName: db.subjects.find((sub) => sub.id === sm.subId).name,
          mark: sm.mark,
        }));
    },
  },
};
