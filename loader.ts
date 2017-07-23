class Loader {
    parent: HTMLElement;
    loader: HTMLElement;
    content: HTMLElement;
    wrapper: HTMLElement;

    constructor(parent: Element) {
        this.parent = <HTMLElement>parent;
    }

    public add(content) {
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
    }

    public update(content: string) {
        this.content.innerHTML = content;
    }

    public remove() {
        this.wrapper.parentNode.removeChild(this.wrapper);
    }
}

export { Loader };
