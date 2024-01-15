import { DataUser } from "./classes/DataUser.js";
import { ManipulateElement } from "./classes/ManipulateElement.js";

export class ControllerDashboard
{
    constructor()
    {
        const dadosUsuario = new DataUser("Rodrigo", "Henrique", "São Paulo - SP", "13/01/1991");

        
        let criarElementoParacrescentarDadosDoUsuario = new ManipulateElement("content");
        let manipulandoElemento = criarElementoParacrescentarDadosDoUsuario.createNewElement("aside");
        let acrescentarElementoFilho = criarElementoParacrescentarDadosDoUsuario.addElement();
        criarElementoParacrescentarDadosDoUsuario.addClassCSS("box-user");
    }
}