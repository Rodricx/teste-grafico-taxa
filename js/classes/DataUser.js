export class DataUser
{
    _nome;
    _sobrenome;
    _cidade;
    _dataNascimento

    constructor(name, surname, city, dateOfBirth)
    {
       this._nome = name;
       this._sobrenome = surname;
       this._cidade = city;
       this._dataNascimento = dateOfBirth;
    }
}