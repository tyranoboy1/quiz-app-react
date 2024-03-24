export interface IAppButtonProps {
  value: string;
  colorScheme: string;
  variant: string;
  className?: string;
  disabled?: boolean;
  width?: string;
  onClick: (e: unknown) => void;
}
