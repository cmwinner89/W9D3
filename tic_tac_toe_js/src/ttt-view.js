class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const applyListener = (event => {
      // debugger   
      let $square = $(event.target);
      let someClass = $square.attr("class")
      if (someClass) {
        alert("Invalid Move");
      } else {
        this.makeMove($square);
      }
      // debugger
    });
    // debugger
    this.$el.on("click", "li", applyListener);

  }

  makeMove($square) {
    let pos = $square.data("pos");
    let currentPlayer = this.game.currentPlayer;

    this.game.playMove(pos);
    $square.addClass(currentPlayer);
    $square.text(currentPlayer);

    if (this.game.winner()) {
      // let $figcaption = $("<figcaption>");
      // $figcaption.text(`You Win, ${currentPlayer}!!!!`);
      // alert("YOU WINN!!!!");
      let $disp = $("<h2>");
      $disp.text("YOU WINN!!");
      this.$el.append($disp);
    }

  }

  setupBoard() {
    // debugger
    const $ul = $("<ul>");
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++){
        let $li = $("<li>");
        $li.data({pos: [row, col]});
        $ul.append($li);

      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
