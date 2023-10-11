export const typeDefs = `#graphql
    type Student {
        id: ID!
        name: String!
        std: Int!
        marks: [StudMark!]!
        # subjects: [Subject!]!
    }

    type StudMark {
        # studId:ID!
        # subId: ID!
        subName: String!
        mark: Int!
    }

    type HighestMark {
        # studId:ID!
        # subId: ID!
        studName: String!
        mark: Int!
    }

    type Subject {
        id: ID!
        name: String!
        isLanguage: Boolean!
        faculty:Faculty!
        highestMark: HighestMark!
    }

    type Faculty {
        id: ID!
        name: String!
        occupation: String!
        subject:Subject!
    }

    # type Standard {
    #     id: ID!
    #     classFaculty:
    # }

    type Query {
        students: [Student]
        subjects: [Subject]
        faculties: [Faculty]
        student(id: ID!) :Student
        subject(id: ID!) :Subject
        faculty(id: ID!) :Faculty
    }
`;

// types : int, float, string, boolean, ID
