interface Ipost {
    id?: number
    nome: string
    sobrenome: string
    descricao: string
    foto: string
    curtidas: number
}

const posts: Ipost[] = [
    { id: 1, nome: '', sobrenome: '', descricao: '', foto: '', curtidas: 1 },
]

export default posts