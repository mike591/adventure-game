import React from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const mesh = React.useRef();
  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
