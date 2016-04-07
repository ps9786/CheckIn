var MenuView = function(){
    this.header  = "<div/>";
    this.content = "<div/>";
    this.initialize = function(){
    this.header  = Handlebars.compile($('#menu-header-template').html());
    this.content = Handlebars.compile($('#menu-content-template').html());
}
this.render = function(){
    var context = {
        messages: app.messages,
        listmenu:   listmenu
    }; 
        $('#header').html(this.header(context));
        $('.content').html(this.content(context));
    }
};

var MainPageView = function(){
    this.menuView = new MenuView();
    this.initialize = function(){
        this.menuView.initialize();
        this.menuView.render();
    }
};

