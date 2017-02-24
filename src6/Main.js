class Main {

    socket;

    constructor() {
        flower.start(this.ready.bind(this));
    }

    ready() {
        flower.URLLoader.urlHead = "http://localhost:12000/";

        var label = new flower.Label("测试文字");
        flower.Stage.getInstance().addChild(label)

        return;
        var preloading = new PreLoading();
        preloading.addListener(flower.Event.COMPLETE, this.loadThemeComplete, this);
    }

    loadThemeComplete(e) {
        e.currentTarget.removeListener(flower.Event.COMPLETE, this.loadThemeComplete, this);
        var stage = flower.Stage.getInstance();
        var ui = new flower.UIParser();
        ui.parseUIAsync("res/JSONTextArea.xml");
        stage.addChild(ui);
    }
}