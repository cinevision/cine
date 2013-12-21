define(["jquery", "underscore","backbone","handlebars","text!templates/cinema-li.html"],

   function ($,_,Backbone,Handlebars,template){
	
	var CinemaView = Backbone.View.extend({
		
		tagName: "li",

		events: {
			"touchend": "Details"
		},

		
		template: Handlebars.compile(template),		
		
		
		render : function(){
			
			$(this.el).html(this.template(this.model.toJSON()));
			return this;

		},

		Details: function(){
			Backbone.history.navigate('collection/' + this.model.id, {trigger: true});
		}
		
				
		
    });
	     return CinemaView;
	
    });