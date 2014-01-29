var Text = function(_font, _game) {
	this.game = _game;
	this.title = null;
	this.x = 0;
	this.y = 0;
	this.align = 'left';
	this.font = _font;
	this.color = '#FFFFFF';
	this.baseline = 'top';
	this.alpha = 1;
	return this;
};

Text.prototype.draw = function() {
	this.game.context.save();
	if(this.font !== null) {
		this.game.context.font = this.font;
	}
	this.game.context.globalAlpha = this.alpha;
	this.game.context.textAlign = this.align;
	this.game.context.textBaseline = this.baseline;
	this.game.context.fillStyle = this.color;
	this.game.context.fillText(this.title, this.x, this.y);
	this.game.context.restore();
};