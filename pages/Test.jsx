import generateMaze from 'generate-maze';
import { usePlayer, TOP, BOTTOM, LEFT, RIGHT } from 'hooks/usePlayer';
import React from 'react';
import mazeViewerStyles from 'styles/MazeViewer.module.scss';
import pageStyles from 'styles/Page.module.scss';
import Box from 'components/Box';
import Controls from 'components/Controls';
import Maze from 'components/Maze';
import { Canvas } from '@react-three/fiber';

const Test = () => {
  const [maze, setMaze] = React.useState();
  const { player, updatePlayer } = usePlayer();

  const handleMove = (isForward = true) => {
    const { direction } = player;
    const movementMap = {
      [TOP]: { change: -1, axis: 'y', backDirection: BOTTOM },
      [BOTTOM]: { change: 1, axis: 'y', backDirection: TOP },
      [LEFT]: { change: -1, axis: 'x', backDirection: RIGHT },
      [RIGHT]: { change: 1, axis: 'x', backDirection: LEFT },
    };

    const changes = {};
    const { change, axis, backDirection } = movementMap[direction];
    const mapCell = maze[player.y][player.x];
    if (isForward) {
      const canMove = !mapCell[player.direction];
      changes[axis] = canMove ? player[axis] + change : player[axis];
    } else {
      const canMove = !mapCell[backDirection];
      changes[axis] = canMove ? player[axis] - change : player[axis];
    }

    const maxAxis = {
      x: maze[0].length,
      y: maze.length,
    };
    if (changes[axis] < 0) {
      changes[axis] = 0;
    } else if (changes[axis] > maxAxis[axis] - 1) {
      changes[axis] = maxAxis[axis] - 1;
    }

    updatePlayer(changes);
  };

  const handleTurn = (isLeft = true) => {
    const directions = [TOP, RIGHT, BOTTOM, LEFT];

    const playerDirectionIndex = directions.indexOf(player.direction);
    let newDirectionIndex = 0;
    if (isLeft) {
      newDirectionIndex =
        (playerDirectionIndex + directions.length - 1) % directions.length;
    } else {
      newDirectionIndex = (playerDirectionIndex + 1) % directions.length;
    }
    updatePlayer({ direction: directions[newDirectionIndex] });
  };

  return (
    <div className={pageStyles.Page}>
      <h1>This is a test page</h1>
      <div>
        {maze && <Maze maze={maze} player={player} />}
        <button onClick={() => setMaze(generateMaze(10, 10, true))}>
          Generate Maze
        </button>
      </div>
      <Controls
        disabled={!maze}
        handleUp={() => handleMove(true)}
        handleDown={() => handleMove(false)}
        handleLeft={() => handleTurn(true)}
        handleRight={() => handleTurn(false)}
      />
      <div className={mazeViewerStyles.MazeViewer}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-2, 0, 4]} />
          <Box position={[-2, 0, -1]} />
          <Box position={[0, 0, -1]} />
          <Box position={[2, 0, 4]} />
          <Box position={[2, 0, -1]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Test;
