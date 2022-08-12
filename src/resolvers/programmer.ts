const programmerResolvers = {
  Programmer: {
    fullName: (obj: any, args: any, context: any, info: any) =>
      `${obj.firstName} ${obj.lastName}`,
  },
};

export default programmerResolvers;
