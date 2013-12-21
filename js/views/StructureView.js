define(["jquery", "underscore", "backbone", "handlebars", "text!templates/structure.html"],
    function ($, _, Backbone, Handlebars, template) {

    var StructureView = Backbone.View.extend({

        id: "mainContainer", 

        events: {
          "touchend #menuButton": "toggleMenu",
        },

        goBack: function () {
          window.history.back();
        },

        template: Handlebars.compile(template),

        render: function (eventName) {
          this.title = "Test";
          $(this.el).html(this.template({"title": this.title}));
          $('body').append($(this.el));          
          return this;
        },

        toggleMenu: function () {
          this.el.classList.toggle("is-menu-visible");
        }
      });

    return StructureView;

  }); 