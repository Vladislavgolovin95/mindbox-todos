import { ButtonProps } from "types/types";
import { SButton } from "./styles";

const Button: React.FC<ButtonProps> = ({ $variant = 'primary', $active, children, ...props }) => {
  return (
    <SButton 
      $variant={$variant} 
      $active={$active} 
      {...props}
    >
      {children}
    </SButton>
  );
};

export default Button;