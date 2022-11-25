import { Button as ButtonDefault } from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "google";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ children, type, onClick, variant }: ButtonProps) => {
  return (
    <ButtonDefault color={variant} onClick={onClick} type={type}>
      {children}
    </ButtonDefault>
  );
};

export default Button;
