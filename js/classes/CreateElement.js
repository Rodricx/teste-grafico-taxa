export class CreateElement
{
    _element;

    constructor(element = "content", newElement, elementohtml, classe)
    {
        this._element = document.getElementById(element);
        let createElement = document.createElement(newElement);
        this._element.appendChild(createElement);
        this.addClassCSS(elementohtml, classe);

        return 
    }

    addClassCSS(element = "", classe = "")
    {
        // Validar se a classe existe
        element.classList.add(classe);
    }
}