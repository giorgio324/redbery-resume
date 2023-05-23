export const addPrivateInfoToLocalStorage = (data) => {
  localStorage.setItem('privateInfo', JSON.stringify(data));
};

export const getPrivateInfoFromLocalStorage = () => {
  const storedPrivateInfo = JSON.parse(localStorage.getItem('privateInfo'));
  return storedPrivateInfo;
};
