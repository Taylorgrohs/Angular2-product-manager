System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Stream;
    return {
        setters:[],
        execute: function() {
            Stream = (function () {
                function Stream(game, viewers, preview, name) {
                    this.game = game;
                    this.viewers = viewers;
                    this.preview = preview;
                    this.name = name;
                }
                return Stream;
            }());
            exports_1("Stream", Stream);
        }
    }
});
//# sourceMappingURL=stream.js.map