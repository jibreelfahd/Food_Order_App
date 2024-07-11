import { useEffect, useRef } from "react";

const useInput =async (validateInput) => {
  const valueInputRef = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //   }
  // }, [])
  const enteredValue = valueInputRef.current?.value;

  return {
    valueInputRef,
    enteredValue
  }

};

export default useInput;