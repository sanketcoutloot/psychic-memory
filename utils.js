const success = ({ data, message = "Successfully" }) => {
  return {
    data,
    message,
    success: 1,
  };
};
const failed = ({ error }) => {
  return {
    error: error._message,
    message: error.message,
    success: 0,
  };
};

const isEmptyObject = (obj) => Object.keys(obj).length === 0;
const isEmptyArr = (arr) => arr.length === 0;

const isFalsyValue = (item) => {
  if (!item) {
    return true;
  }

  return isEmptyArr(item) || isEmptyObject(item);
};

module.exports = {
  failed,
  success,
  isFalsyValue,
};
