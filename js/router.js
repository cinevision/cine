define(["jquery", "underscore", "backbone" , "views/HomeView", "views/ListaCinemaView", "views/CineInfoView", "views/StructureView","views/CinemaHomeView","collections/CineCollection","collections/Films", "models/CineDati", "models/Film"],
	function ($, _, Backbone, HomeView, ListaCinemaView, CineInfoView,StructureView, CinemaHomeView, CineCollection, Films, CineDati, Film){



var AppRouter = Backbone.Router.extend({

	routes: {
		"": "structure",
		"listacinema" : "cinelist",
		"collection/:id": "Details",
		"movies/:edi": "movieDetails",
		"cinemahome" : "cinemacasa"
	},

	initialize : function(){
		this.currentView = undefined;
		this.collection = new CineCollection();
		this.movies = new Films();
		
		
		
	},	

	 structure: function () {
		 if(!this.structureView) {
	          this.structureView = new StructureView(); //provare a rendere variabile globale
	          this.structureView.render();
	          //this.contents = this.structureView.$el.find("#content #contents");
	        }
	        this.contents = this.structureView.$el.find("#content #contents");
	        this.home();
	      },
		
	home: function(){
		var page = new HomeView();
		this.changePage(page);
		
	},
	
	cinemacasa : function(){
		var page = new CinemaHomeView();
		this.changePage(page);
	},

	cinelist: function(){
		
		 var page = new ListaCinemaView({
	    	model: this.collection
	    });
	    this.changePage(page);
		

	},

	Details: function(id){
		var cine = this.collection.get(id);
		var page = new CineInfoView({
			model : cine
		});
		page.listafilm = new Films();
		this.changePage(page);

	},

	movieDetails: function(edi){
		var movie = this.movies.get(id);
		console.log(movie);
	},
	
	changePage: function (page) {
		if(this.currentView) {
	           this.currentView.remove();
	           this.currentView.off();
	        }
	        this.currentView = page;
	        page.render();
	        this.contents.append($(page.el));
	        this.currentView.trigger("inTheDom");
	      
      }



});

return AppRouter;
});