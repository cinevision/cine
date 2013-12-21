define(["jquery", "underscore", "backbone", "handlebars","views/FilmView", "text!templates/lista-film.html"],
	function ($, _, Backbone, Handlebars, FilmView, template){

		var ListaFilmView = Backbone.View.extend({
 
            tagName : "td",		


			initialize: function(){
				this.model.on("reset",this.render,this);
			},

			template: Handlebars.compile(template),

			render: function(){
				$(this.el).empty();
				_.each(this.model.models,function (movie){
					$(this.el).append(new FilmView({
						model: movie
					}).render().el);
				}, this);
				return this;
			}


		});

		return ListaFilmView;

	
	});