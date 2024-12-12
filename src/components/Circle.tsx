interface CircleProps {
  size: number;
  color: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  opacity?: number;
}

const Circle: React.FC<CircleProps> = ({
  size,
  color,
  position,
  opacity = 1,
}) => {
  return (
    <div
      className={`absolute z-20 rounded-full`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity,
        ...position,
      }}
    ></div>
  );
};

export default Circle;
