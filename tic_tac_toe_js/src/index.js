const View = require("./ttt-view"); // require appropriate file
const Game = require("../../tic_tac_toe_node_sol/game"); // require appropriate file

  $(() => {
    const $el = $("figure.ttt");
    const g = new Game();
    new View(g, $el);
  });
