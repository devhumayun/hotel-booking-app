export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj?._id?.toString() };
  return updatedObj;
};

export const isTimeInBetween = (date, from, to) => {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
};

export const dayDifference = (from, to) => {
  let days = new Date(to).getTime() - new Date(from).getTime();
  days = days / (24 * 60 * 60 * 1000) + 1;
  return days;
};
