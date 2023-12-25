import { useEffect, useState } from 'react';

const useInputValidation = (value, regex) => {
  const [isValid, setValid] = useState(false);


  useEffect(() => {
    const result = regex.test(value);
    setValid(result);
  }, [value, regex]);

  return isValid;
};

export default useInputValidation



