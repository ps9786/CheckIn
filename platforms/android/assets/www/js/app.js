var app = {
    isCordova: typeof cordova !== 'undefined',
    messages: {
        title: "GLSW Explorer Belt",
        order: "Send"
    },
    initialize: function(){
        console.log('app initializing');
        this.mainpageView.initialize();
    },
    bindEvents: function() {
        if(this.isCordova){
            document.addEventListener('deviceready', app.onDeviceReady, false);
        }
    },
    onDeviceReady: function() {
        console.log('deviceready');
        FastClick.attach(document.body);
    },
    mainpageView: new MainPageView()
};