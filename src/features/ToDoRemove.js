export const handleRemove = (item, array) => {
  array.value = array.value.filter((t) => t.id !== item.id);
};
