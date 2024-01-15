export class ManipulateElement
{
    _element;
    _newElement;

    constructor(element)
    {
        this._element = document.getElementById(element);
    }

    addClassCSS(classe)
    {
        this._newElement.classList.add(classe);
    }

    createNewElement(element)
    {
        this._newElement = document.createElement(element);
    }

    addElement()
    {
        this._element.appendChild(this._newElement);
    }
}