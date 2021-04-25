import React from 'react';

const Box = ({ ...props }) => {
  const mesh = React.useRef();

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Box;
