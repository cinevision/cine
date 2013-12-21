define(["jquery", "underscore", "backbone"],
	function ($, _, Backbone){

		var CineDati = Backbone.Model.extend({
			defaults : {
				id : undefined ,
				name: undefined,
				cinema_url : undefined,
				address : undefined,
				postcode : undefined,
				telephone : undefined				
				
			}

		});

		return CineDati;

	});