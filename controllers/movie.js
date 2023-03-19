const { Movie } = require('../models');

class MovieController {
    static healthCheck(req, res, next) {
        res.status(200).json({message: 'Hello World'})
    }

    static index(req, res, next) {
        Movie.findAll()
            .then(data => {
                res.status(200).json({data, message: 'Success'})
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    }

    static add(req, res, next) {
        Movie.create({
            title: req.body.title,
            url: req.body.url,
            image: req.body.image,
            user_id: req.userData.id
        })
        .then(data => {
            res.status(201).json({data, message: 'Movie created!'})
        })
        .catch(err => {
            res.send(err)
        })
        .catch(err => {
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    }

    static detail(req, res, next) {
        Movie.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({message: 'Movie not found!'})
            } else {
                res.status(200).json({data})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    }

    static edit(req, res, next) {
        const updatedMovie = {
            id: req.params.id,
            title: req.body.title,
            url: req.body.url,
            image: req.body.image,
            user_id: req.userData.id
        }
        
        Movie.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                if (!data) {
                    res.status(404).json({status: 404, message: 'Movie not found'})
                } else {
                    return Movie.update(updatedMovie, {where: {id: req.params.id}})
                }
            })
            .then(data => {
                res.status(200).json({data: updatedMovie, message: 'Movie updated!'})
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    }

    static delete(req, res, next){
        Movie.findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).json({status: 404, message: 'Movie not found'})
                } else {
                    return Movie.destroy({where: {id: req.params.id}})
                }
            })
            .then(data => {
                res.status(200).json({message: 'Movie deleted!'})
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    }
}

module.exports = MovieController;