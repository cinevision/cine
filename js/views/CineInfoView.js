define(["jquery", "underscore","backbone","handlebars", "views/ListaFilmView", "views/FilmView", "models/Film","collections/Films","text!templates/cine-info.html"],

   function ($,_,Backbone,Handlebars, ListaFilmView ,FilmView, Film ,Films , template){
	
	
	var CineInfoView = Backbone.View.extend({
		
		template: Handlebars.compile(template),
		
		
		initialize : function (){
			var id = this.model.get('id');
			var self = this;
			$.ajax({
	            url: 'http://www.cineworld.com/api/quickbook/films',
	            type: 'GET',
	            data: {key: 'BwKR7b2D', full: 'true', cinema : id, date: 20131221},
	            dataType: 'jsonp', // Setting this data type will add the callback parameter for you
	            success: function (response, status) {
	                
                    
	                // Check for errors from the server
	                if (response.errors) {
	                    $.each(response.errors, function() {
	                        alert('An error occurred. Please Try Again');
	                    });
	                } else {
	                    console.log(response.films.length);
	                    $.each(response.films, function() {
	                        var movie = new Film();
	                    	movie.set({ edi : this.edi, title : this.title , id : this.id, classification: this.classification, advisory : this.advisory , poster_url : this.poster_url , still_url : this.still_url , film_url : this.film_url });
	                    	self.listafilm.add([movie]);
	                    	                        
	                    });
	                    self.render();
	                }}
	        });
			
			
		},
		
		
		
		render : function(){
					   
		   	$(this.el).html(this.template(this.model.toJSON())).append(new ListaFilmView({model: this.listafilm}).render().el);
			
			return this;
			
		}	
		
    });
	     return CineInfoView;
	
    });




