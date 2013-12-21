define(["jquery", "underscore","backbone","handlebars","text!templates/locandina-film.html"],

   function ($,_,Backbone,Handlebars,template){
	
	var FilmView = Backbone.View.extend({



        events: {

        	"touchend" : "movieDetails",
        },   

		template: Handlebars.compile(template),
		
		
		render : function(eventName){
			//var movie = this.model.toJSON();
			//movie.cid = this.model.cid;


			$(this.el).html(this.template(this.model.toJSON()));
			console.log(this.model.toJSON());

			return this;
		},

		movieDetails: function(){
			Backbone.history.navigate('movies/' + this.model.edi, {trigger: true});
			console.log(this.model.get('edi'));

			}
		
    });
	     return FilmView;
	
    });




