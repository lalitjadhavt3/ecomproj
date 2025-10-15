import {Dimensions} from 'react-native';
import {useState, useEffect} from 'react';

export const useResponsive = () => {
  const [screen, setScreen] = useState(Dimensions.get('window'));
  
  useEffect(() => {
    const onChange = ({window}: any) => setScreen(window);
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);
  
  return screen;
};