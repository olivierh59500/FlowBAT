(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("{{t \"messages.resetPassword.subject\" user=user settings=settings}}\n");Handlebars.templates["resetPasswordSubject"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "resetPasswordSubject"});};

})();
