describe ('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game;
    frame = new Frame;
  });

  // describe('Gutter game', function() {
  //   it('When the player never hits a pin (20 zero scores).', function() {
  //     expect(game.finalScore()).toEqual(0);
  //   });
  // });
//
//   describe('Perfect game', function() {
//     it('The Perfect Game scores 300 points.', function() {
//       expect(game.finalScore()).toEqual(300);
//     });
//   });

  describe('Add frame to the game', function(){
    it('has 10 frames', function(){
      for(var i=0; i<10; i++){
      game.add_frame(frame)
    }
      expect(function(){game.add_frame(frame)}).toThrow(new Error('Each game has 10 frames'));
    });
  });


});