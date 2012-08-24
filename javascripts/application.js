var app = {
	initialise: function() {
		app.log('initialised');
	},
	
	log: function(message) {
		if(typeof console != 'undefined') console.log(message);
	}

};

$(document).ready(function(){
	app.initialise();
});
