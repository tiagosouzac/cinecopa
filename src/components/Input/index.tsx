import {
  InputController,
  Label,
  Input as InputDefault,
  InputContainer,
  ErrorMessage,
} from "./styles";
import ErrorImg from "../../assets/images/error.svg";
import SucessImg from "../../assets/images/sucess.svg";
import Image from "next/image";

interface InputProps {
  label?: string;
  errorMessage: string;
  placeholder?: string;
  type: string;
  name: string;
  state?: "sucess" | "error";
  value?: string;
  setValue?: (value: string) => void;
}

const Input = ({
  label,
  errorMessage,
  placeholder,
  name,
  type,
  state,
  value,
  setValue,
}: InputProps) => {
  const handleValue = (e: any) => {
    const value = e.target.value;

    if (setValue) setValue(value);
  };

  return (
    <InputController>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputContainer color={state}>
        <InputDefault
          value={value}
          id={name}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={handleValue}
        />

        {state === "sucess" && <Image src={SucessImg} alt="" />}
        {state === "error" && <Image src={ErrorImg} alt="" />}
      </InputContainer>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputController>
  );
};

export default Input;
