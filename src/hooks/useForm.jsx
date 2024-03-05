import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido.",
  },
  name: {
    regex: /^[a-zA-Z\u00C0-\u00FF\W ]{3,100}$/,
    message: "Nome precisa ter entre 3 e 100 caracteres.",
  },
  subject: {
    regex: /^[a-zA-Z\u00C0-\u00FF ]{3,100}$/,
    message: "O assunto precisa ter pelo menos 3 caracteres",
  },
  message: {
    regex: /^[a-zA-Z0-9\u00C0-\u00FF\W_ ]{10,550}$/,
    message: "A mensagem precisa ter entre 10 e 550 caracteres.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");

      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    setError,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
