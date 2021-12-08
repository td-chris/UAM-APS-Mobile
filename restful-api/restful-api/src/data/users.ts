interface Iuser {
    id?: number
    nome: string
    sobrenome: string
    filmes: string
    generos: string
}

const users: Iuser[] = [
    { id: 1, nome: 'Sem nome', sobrenome: '', filmes: '', generos: '' },
]

export default users