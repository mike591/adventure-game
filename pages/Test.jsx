import generateMaze from 'generate-maze';
import usePlayer from 'hooks/usePlayer';
import React from 'react';
import pageStyles from 'styles/Page.module.scss';
import Box from 'components/Box';
import Controls from 'components/Controls';
import Maze from 'components/Maze';
import { Canvas } from '@react-three/fiber';

const Test = () => {
    const [maze, setMaze] = React.useState();
    const { player, updatePlayer } = usePlayer();

    const handleMovement = (changes) => {
        return () => {
            const { x = 0, y = 0 } = changes;
            const newX = player.x + x;
            const newY = player.y + y;

            const currentCell = maze[player.y][player.x];
            const isMovingRight = x > 0;
            const canMoveRight = !currentCell.right;

            const isMovingLeft = x < 0;
            const canMoveLeft = !currentCell.left;

            const isMovingDown = y > 0;
            const canMoveDown = !currentCell.bottom;

            const isMovingUp = y < 0;
            const canMoveUp = !currentCell.top;

            let canMove = true;
            if (isMovingRight) {
                canMove = canMoveRight;
            }
            if (isMovingLeft) {
                canMove = canMoveLeft;
            }
            if (isMovingDown) {
                canMove = canMoveDown;
            }
            if (isMovingUp) {
                canMove = canMoveUp;
            }

            if (canMove) {
                updatePlayer({
                    x: newX < 0 ? 0 : newX,
                    y: newY < 0 ? 0 : newY,
                });
            }
        };
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
                handleUp={handleMovement({ y: -1 })}
                handleDown={handleMovement({ y: 1 })}
                handleLeft={handleMovement({ x: -1 })}
                handlerRight={handleMovement({ x: 1 })}
            />
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    );
};

export default Test;
