import { useCallback, useState } from "react";

export default function useFormController(initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChangeHandler = useCallback((e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, onChange: onChangeHandler };
}
