define(["jquery", "underscore", "backbone", "models/CineDati"],
    function ($, _, Backbone, CineDati) {

    var CineCollection = Backbone.Collection.extend({
        model: CineDati
      });

    return CineCollection;

  });