import React from "react";
import ReactDOM from "react-dom";
import Game from "./TicTacToe/Game";

import "./index.css";

const App = (
    <div>
       <Game />
    </div>
);

ReactDOM.render(
    App,
    document.getElementById("root"),
)