export const CREATE_PROGRAMMERS_MUTATION = `
  mutation($createProgrammerInput: [ProgrammerCreateInput!]!) {
    createProgrammers(input: $createProgrammerInput) {
      programmers {
        firstName,
        lastName,
        fullName
      }
    }
  }
`;

export const CREATE_PROGRAMMERS_PARAMS = {
  createProgrammerInput: [
    { firstName: "Nikky", lastName: "Shah" },
    { firstName: "Aayansh", lastName: "Shah" },
  ],
};

export const CREATE_PROGRAMMERS_OUTPUT = {
  programmers: [
    {
      firstName: "Nikky",
      lastName: "Shah",
      fullName: "Nikky Shah",
    },
    {
      firstName: "Aayansh",
      lastName: "Shah",
      fullName: "Aayansh Shah",
    },
  ],
};
