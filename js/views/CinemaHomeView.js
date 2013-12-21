define(["jquery", "underscore","backbone","handlebars","text!templates/cinemahome.html"],

   function ($,_,Backbone,Handlebars,template){
	
	var CinemaHomeView = Backbone.View.extend({
		
		template: Handlebars.compile(template),
		
		events : {
			"submit form": "submit"
		},
		
		submit : function(eventName){
			eventName.preventDefault();
			var s = document.getElementById('stringa').value;
			console.log(s);
			
		},
		
		
		render : function(){
			$(this.el).html(template);
			return this;
		}	
		
    });
	     return CinemaHomeView;
	
    });




