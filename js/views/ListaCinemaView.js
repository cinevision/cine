define(["jquery", "underscore", "backbone", "handlebars", "views/CinemaView", "models/CineDati", "text!templates/listacinema.html"],
	function ($, _, Backbone, Handlebars, CinemaView, CineDati, template){

		var ListaCinemaView = Backbone.View.extend({

			template: Handlebars.compile(template),

			initialize : function (){
			var self = this;
			$.ajax({
	            url: 'http://www.cineworld.com/api/quickbook/cinemas',
	            type: 'GET',
	            data: {key: 'BwKR7b2D', full: 'true'},
	            dataType: 'jsonp', // Setting this data type will add the callback parameter for you
	            success: function (response, status) {
	                
                    
	                // Check for errors from the server
	                if (response.errors) {
	                    $.each(response.errors, function() {
	                        alert('An error occurred. Please Try Again');
	                    });
	                } else {
	                    
	                    $.each(response.cinemas, function() {
	                        var cinema = new CineDati();
	                    	cinema.set({ id : this.id, name : this.name , cinema_url : this.cinema_url, address: this.address, postcode : this.postcode , telephone : this.telephone });
	                    	self.model.add([cinema]);
	                    	                        
	                    });
	                    self.render();
	                }}
	        });
			
			
		},



			render: function(){
				$(this.el).empty();
				 document.getElementById("title").innerHTML = "ListaCinema";
				$(this.el).html(template).append(_.each(this.model.models, function(cinema){
					$("#lista").append(new CinemaView({
						model : cinema
					}).render().el);
				},this));

				return this;
			}



		});

		return ListaCinemaView;

	});



