"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loader = (function () {
    function Loader(parent) {
        this.parent = parent;
    }
    Loader.prototype.add = function (content) {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'l-loader-wrapper jsa-loader');
        this.loader = document.createElement('div');
        this.loader.setAttribute('class', 'l-loader');
        this.content = document.createElement('div');
        this.content.setAttribute('class', 'l-loader__content');
        this.wrapper.appendChild(this.content);
        this.wrapper.appendChild(this.loader);
        this.update(content);
        this.parent.appendChild(this.wrapper);
    };
    Loader.prototype.update = function (content) {
        this.content.innerHTML = content;
    };
    Loader.prototype.remove = function () {
        this.wrapper.parentNode.removeChild(this.wrapper);
    };
    return Loader;
}());
exports.Loader = Loader;
