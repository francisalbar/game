
/* Stage */
var stage = $('#stage');
// Maximize Stage
stage.bind('updateStageSize', function() {
	$(this).css({
		'width': $(window).width(),
		'height': $(window).height()
	});
});

// Click on Stage
stage.bind('click', function(e) {
	stage.find('.ship').trigger('move', { x: e.offsetX, y: e.offsetY });
});

/* Ship */
var ship = $('<div></div>').addClass('ship');
ship.addClass('ship-type-wraith');
stage.append(ship);
ship.degreesPerFrame = 10.8;
ship.offsetPosLeft = ship.width() / 2;
ship.offsetPosTop = ship.height() / 2;
ship.x = ship.offset().left + ship.offsetPosLeft;
ship.y = ship.offset().top + ship.offsetPosTop;

// Turn ship to position
ship.bind('turn', function(e, pos) {
	var angle = Math.atan(Math.abs(pos.x-ship.x)/Math.abs(pos.y-ship.y))*(360/(2*Math.PI));
	if( pos.x>=ship.x && pos.y>=ship.y ) { // Q2
		angle = 180 - angle;
	} else if( pos.x<ship.x && pos.y>ship.y ) { // Q3
		angle = 180 + angle;
	} else if( pos.x<ship.x && pos.y<ship.y ) { // Q4
		angle = 360 - angle;
	}
	ship.trigger('setFrame', parseInt(angle/ship.degreesPerFrame, 10));
});

// Move ship to position
ship.bind('move', function(e, pos) {
	ship.trigger('turn', pos);
	ship.animate({
		left: pos.x - ship.offsetPosLeft,
		top: pos.y - ship.offsetPosTop
	});
	ship.x = pos.x;
	ship.y = pos.y;
});

// Set frame angle
ship.bind('setFrame', function(e, frame) {
	$(this).css({
		'background-position': '0px ' + (-frame * $(this).height() ) + 'px'
	});
});


// Bind window load and resize to stage resize
$(window).bind('resize.updateStageSize', function() {
	stage.trigger('updateStageSize');
});
$(window).bind('load.updateStageSize', function() {
	stage.trigger('updateStageSize');
});