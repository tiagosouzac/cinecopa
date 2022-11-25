import { Button as ButtonDefault } from "./styles";

interface ButtonProps {
  text?: string;
  variant?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ text, type, onClick, variant }: ButtonProps) => {
  return (
    <ButtonDefault color={variant} onClick={onClick} type={type}>
      {text}
    </ButtonDefault>
  );
};

export default Button;
