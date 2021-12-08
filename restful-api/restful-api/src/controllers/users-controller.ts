import { Request, Response } from 'express'

import users from '../data/users'

class UsersController {
    find(req: Request, res: Response): void {
        res.json(users)
    }

    findById(req: Request, res: Response): void {
        const id = +req.params.id

        const user = users.find(p => p.id === id)

        if (!user) {
            res.status(404).json({ erro: 'Usuario não encontrado' })
            return
        }

        res.json(user)
    }

    create(req: Request, res: Response): void {
        const { nome, sobrenome, filmes, generos } = req.body
        const id = users.length + 1

        users.push({ id, nome, sobrenome, filmes, generos })

        res.status(201).send('Usuario adicionado')
    }

    update(req: Request, res: Response): void {
        const id = +req.params.id
        const { nome, sobrenome, filmes, generos } = req.body

        const user = users.find(p => p.id === id)

        if (!user) {
            res.status(404).json({ erro: 'Usuario não encontrado' })
            return
        }

        users[id - 1] = { id, nome, sobrenome, filmes, generos }

        res.send('Usuario atualizado')
    }

    delete(req: Request, res: Response): void {
        const id = +req.params.id

        const { nome, sobrenome, filmes, generos } = req.body

        const user = users.find(p => p.id === id)

        if (!user) {
            res.status(404).json({ erro: 'Produto não encontrado' })
            return
        }

        users.splice(id - 1, 1)
        users.forEach(p => p.id = users.indexOf(p) + 1)

        res.send('Produto removido')
    }
}

export default new UsersController