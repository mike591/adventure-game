import React from "react";
import { generateMaze, displayMaze } from "utils/maze";

const Test = () => {
  const [maze, setMaze] = React.useState();

  return (
    <div>
      <h1>This is a test page</h1>
      <div>
        <pre>{maze && displayMaze(maze)}</pre>
        <button onClick={() => setMaze(generateMaze({ x: 10, y: 10 }))}>
          Generate Maze
        </button>
      </div>
    </div>
  );
};

export default Test;
