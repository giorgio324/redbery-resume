// page localStorage functions
export const addPageNumberToLocalStorage = (data) => {
  localStorage.setItem('page', JSON.stringify(data));
};

export const getPageNumberFromLocalStorage = () => {
  const result = localStorage.getItem('page');
  const storedPageNumber = result
    ? JSON.parse(localStorage.getItem('page'))
    : null;
  return storedPageNumber;
};

// privateInfo localStorage functions
export const addPrivateInfoToLocalStorage = (data) => {
  localStorage.setItem('privateInfo', JSON.stringify(data));
};

export const getPrivateInfoFromLocalStorage = () => {
  const storedPrivateInfo = JSON.parse(localStorage.getItem('privateInfo'));
  return storedPrivateInfo;
};
