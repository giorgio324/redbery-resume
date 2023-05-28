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

// experience localStorage functions
export const addExperienceToLocalStorage = (data) => {
  localStorage.setItem('experience', JSON.stringify(data));
};

export const getExperienceFromLocalStorage = () => {
  const result = localStorage.getItem('experience');
  const storedExperience = result
    ? JSON.parse(localStorage.getItem('experience'))
    : null;
  return storedExperience;
};

// education localStorage functions
export const addEducationToLocalStorage = (data) => {
  localStorage.setItem('education', JSON.stringify(data));
};

export const getEducationFromLocalStorage = () => {
  const result = localStorage.getItem('education');
  const storedEducation = result
    ? JSON.parse(localStorage.getItem('education'))
    : null;
  return storedEducation;
};
