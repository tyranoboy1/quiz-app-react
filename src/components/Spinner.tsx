interface ISpinnerProps {
  thickness: string;
  speed: string;
  color: string;
  emptyColor: string;
  size: string;
}

const Spinner = (props: ISpinnerProps) => {
  const { thickness, speed, color, emptyColor, size } = props;
  return (
    <Spinner
      thickness={thickness}
      speed={speed}
      color={color}
      emptyColor={emptyColor}
      size={size}
    />
  );
};

export default Spinner;
