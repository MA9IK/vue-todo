export const handleAdd = (title, array) => {
  array.value.push({ id: array.value.length + 1, title });
};
