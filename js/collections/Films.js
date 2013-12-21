define(["jquery", "underscore", "backbone", "models/Film"],
    function ($, _, Backbone, Film) {

    var Films = Backbone.Collection.extend({
        model: Film
      });

    return Films;

  });