const keys = {
  inputApiUrl: "",
  inputAccessKey: "",
  inputSecretKey: "",
};

export const setKeys = (newKeys: typeof keys) => {
  keys.inputApiUrl = newKeys.inputApiUrl;
  keys.inputAccessKey = newKeys.inputAccessKey;
  keys.inputSecretKey = newKeys.inputSecretKey;
};

export const getKeys = () => {
  return keys;
};
