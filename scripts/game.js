
/* Stage */
var stage = $('#stage');
// Maximize Stage
stage.bind('updateStageSize', function() {
	$(this).css({
		'width': $(window).width(),
		'height': $(window).height()
	});
});

/* Ship */
var ship = $('<div></div>').addClass('ship');
ship.addClass('ship-type-wraith');

// Bind window load and resize to stage resize
$(window).bind('resize.updateStageSize', function() {
	stage.trigger('updateStageSize');
});
$(window).bind('load.updateStageSize', function() {
	stage.trigger('updateStageSize');
});