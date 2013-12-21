define(["jquery", "underscore", "backbone"],
	function ($, _, Backbone){

		var Film = Backbone.Model.extend({
			defaults : {
				edi : undefined,
				title: undefined,
				id: undefined,
				classification: undefined,
				advisory: undefined,
				poster_url: undefined,
				still_url: undefined,
				film_url: undefined
				
			}

		});

		return Film;

	});