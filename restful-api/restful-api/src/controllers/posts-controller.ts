import { Request, Response } from 'express'

import posts from '../data/posts'

class PostsController {
    find(req: Request, res: Response): void {
        res.json(posts)
    }

    findById(req: Request, res: Response): void {
        const id = +req.params.id

        const post = posts.find(p => p.id === id)

        if (!post) {
            res.status(404).json({ erro: 'Postagem não encontrada' })
            return
        }

        res.json(post)
    }

    create(req: Request, res: Response): void {
        const { nome, sobrenome, descricao, foto, curtidas } = req.body
        const id = posts.length + 1

        posts.push({ id, nome, sobrenome, descricao, foto, curtidas })

        res.status(201).send('Postagem adicionada')
    }

    update(req: Request, res: Response): void {
        const id = +req.params.id
        const { nome, sobrenome, descricao, foto, curtidas } = req.body

        const post = posts.find(p => p.id === id)

        if (!post) {
            res.status(404).json({ erro: 'Postagem não encontrada' })
            return
        }

        posts[id - 1] = { id, nome, sobrenome, descricao, foto, curtidas }

        res.send('Postagem atualizada')
    }

    delete(req: Request, res: Response): void {
        const id = +req.params.id

        const { nome, sobrenome, descricao, foto, curtidas } = req.body

        const post = posts.find(p => p.id === id)

        if (!posts) {
            res.status(404).json({ erro: 'Postagem não encontrada' })
            return
        }

        posts.splice(id - 1, 1)
        posts.forEach(p => p.id = posts.indexOf(p) + 1)

        res.send('Postagem removida')
    }
}

export default new PostsController