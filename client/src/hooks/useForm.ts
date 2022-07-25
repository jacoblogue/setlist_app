import React, { useState } from "react";

export const useForm = (callback: () => any, intialState = {}) => {
  const [values, setValues] = useState(intialState);

  //onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
  
  //onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  }
  
  return {
    onChange,
    onSubmit,
    values,
  }
}