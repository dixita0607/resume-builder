export const setIn = (objArr, fields, value) => {
  if (fields.length === 1) {
    return Array.isArray(objArr)
      ? [
          ...objArr.slice(0, fields[0]),
          ...(value === undefined ? [] : [value]),
          ...objArr.slice(value === undefined ? fields[0] + 1 : fields[0]),
        ]
      : {
          ...objArr,
          [fields[0]]: value,
        };
  }
  return Array.isArray(objArr)
    ? [
        ...objArr.slice(0, fields[0]),
        setIn(objArr[fields[0]], fields.slice(1), value),
        ...objArr.slice(fields[0] + 1),
      ]
    : {
        ...objArr,
        [fields[0]]: setIn(objArr[fields[0]], fields.slice(1), value),
      };
};
