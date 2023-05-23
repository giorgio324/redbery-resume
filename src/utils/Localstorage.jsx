import { clearPrivateInfo } from '../features/PrivateInfoSlice';
import { useDispatch } from 'react-redux';
export const addPrivateInfoToLocalStorage = (data) => {
  localStorage.setItem('privateInfo', JSON.stringify(data));
};

export const getPrivateInfoFromLocalStorage = () => {
  const storedPrivateInfo = JSON.parse(localStorage.getItem('privateInfo'));
  return storedPrivateInfo;
};

export const removePrivateInfoFromLocalStorage = () => {
  localStorage.removeItem('privateInfo');
  const dispatch = useDispatch();
  dispatch(clearPrivateInfo());
};
