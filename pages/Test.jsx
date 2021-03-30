import React from "react";
import pageStyles from "styles/Page.module.scss";
import generateMaze from "generate-maze";
import Maze from "components/Maze";

const Test = () => {
  const [maze, setMaze] = React.useState();

  return (
    <div className={pageStyles.Page}>
      <h1>This is a test page</h1>
      <div>
        {maze && <Maze maze={maze} />}
        <button onClick={() => setMaze(generateMaze(10, 10, false))}>
          Generate Maze
        </button>
      </div>
    </div>
  );
};

export default Test;
