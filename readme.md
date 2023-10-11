# This is Graphql Repo

### Used Apollo/server and graphql

## Created Example using using Student, Subject, Marks, Faculty

- Where Student have marks which are associated with Subject
- Faculties are teaching specific Subject
- Faculty have one associated class as Class Teacher

Operation

```query ExampleQuery($id:ID!) {
  faculty(id: $id) {

    id,
    name,
    subject {
      id,
      name
    }
  }
  subject(id: $id) {
    id,
    name,
    faculty {
      id,
      name
    },
    highestMark {
      mark,
      studName,
    },
  }
  students {
    id,
    name,
    std,
    marks {
      subName,
      mark
    },
  }
}
```
