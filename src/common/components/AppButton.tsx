import { Button } from "@chakra-ui/react";
import { IAppButtonProps } from "../interface/common.interface";

const AppButton = (props: IAppButtonProps) => {
  const { value, onClick, colorScheme, variant, className, disabled, width } =
    props;
  return (
    <Button
      onClick={onClick}
      colorScheme={colorScheme}
      variant={variant}
      className={className}
      isDisabled={disabled}
      w={width}
    >
      {value}
    </Button>
  );
};

export default AppButton;
