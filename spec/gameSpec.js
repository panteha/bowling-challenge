describe ('Game', function() {
  var game;
  var frame1;
  var frame2;

  beforeEach(function() {
    game = new Game;
    frame1 = new Frame;
    frame2 = new Frame;
  });

  describe('Add frame to the game', function(){
    it('can have more than one frame to the game', function(){
      for(var i=0; i<2; i++){
      game.add_frame(frame1)
    }
    expect(game.frames.length).toBeGreaterThan(1);
    });
  });


  describe('Add frame to the game', function(){
    it('has 10 frames', function(){
      for(var i=0; i<10; i++){
      game.add_frame(frame1)
    }
      expect(function(){game.add_frame(frame1)}).toThrow(new Error('Each game has 10 frames'));
    });
  });

  describe('Gutter game', function() {
    it('When the player never hits a pin (20 zero scores).', function() {
      expect(game.finalScore()).toEqual(0);
    });
  });

  describe('score', function(){
    it('When spare, the score is 10 plus bonus from the next roll', function(){
      game.add_frame(frame1);
      frame1.add_roll(3);
      frame1.add_roll(7);
      game.add_frame(frame2);
      frame2.add_roll(2);
      frame2.add_roll(3);
      expect(game.finalScore()).toEqual(17);
    });
  });

  describe('score', function(){
    it('When strike, the score is 10 plus bonus from the next 2 rolls', function(){
      game.add_frame(frame1);
      frame1.add_roll(10);
      frame1.add_roll(0);
      game.add_frame(frame2);
      frame2.add_roll(2);
      frame2.add_roll(3);
      expect(game.finalScore()).toEqual(20);
    });
  });

  describe('Perfect game', function() {
    it('The Perfect Game scores 300 points.', function() {
      for(var i=0; i<10; i++){
        var is_last_frame = i == 9;
        var frame = new Frame(is_last_frame);
        frame.add_roll(10);
        if (is_last_frame) {
          frame.add_roll(10);
          frame.add_roll(10);
        }
        game.add_frame(frame);
      }
      expect(game.finalScore()).toEqual(300);
    });
  });

  describe('Sample game', function() {
    it('returns the right score for the sample score card', function() {
      frame = new Frame;
      frame.add_roll(1);
      frame.add_roll(4);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(4);
      frame.add_roll(5);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(6);
      frame.add_roll(4);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(5);
      frame.add_roll(5);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(10);
      frame.add_roll(0);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(0);
      frame.add_roll(1);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(7);
      frame.add_roll(3);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(6);
      frame.add_roll(4);
      game.add_frame(frame);
      frame = new Frame;
      frame.add_roll(10);
      frame.add_roll(0);
      game.add_frame(frame);
      frame = new Frame(true);
      frame.add_roll(2);
      frame.add_roll(8);
      frame.add_roll(6);
      game.add_frame(frame);
      expect(game.finalScore()).toEqual(133);
    })
  })


});
