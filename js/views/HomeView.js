define(["jquery", "underscore","backbone","handlebars","text!templates/home.html"],

   function ($,_,Backbone,Handlebars,template){
	
	var HomeView = Backbone.View.extend({
		
		template: Handlebars.compile(template),
		
		events : {
			"touchend #cinemaBtn" : "GoCinema",	
			"touchend #homeBtn" : "cinemahome"	
		},
		
		render : function(){
			
			$(this.el).html(this.template);
			return this;
		},
		
		GoCinema: function(){
			Backbone.history.navigate("listacinema", {trigger : true});
		},
		
		cinemahome: function(){
			Backbone.history.navigate("cinemahome", {trigger : true});
		}
		
    });
	     return HomeView;
	
    });




