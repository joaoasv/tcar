(function(window, document) {

    function DOM(nodes) {
        if(!(this instanceof DOM))
            return new DOM(nodes);
        this.node = document.querySelectorAll(nodes);
    }

    DOM.prototype.on = function on(event, callback) {
        return Array.prototype.map.call(this.node, function(element) {
            element.addEventListener(event, callback, false);
        });
    };

    DOM.prototype.get = function get() {
        return this.node[0];
    };

    window.DOM = DOM;

})(window, document);
