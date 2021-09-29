export interface Collapse {
    titulo:      string;
    complemento: Complemento[];
}

export interface Complemento {
    texto:    string;
    element:  string;
    listaUl?: Lista[];
    listaOl?: Lista[];
}

export interface Lista {
    texto: string;
}