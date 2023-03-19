const app = require('../app')
const request = require('supertest')
const AdminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY3OTIwMDEzM30.xSD60hGm_XJCRFZch5xB60ChdeioBY61_ztarxJevFs"

test('List Movie', (done) => {
    request(app)
        .get('/api/v1/movie')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            console.log(response.body.data.length)
            expect(response.body.data.length).toBe(response.body.data.length)
            done()
        })
        .catch(done)
})

// Using Token
test('Add Movie', (done) => {
    const newMovie = {
        title: "Movie 1",
        url: "https://imdb.com",
        image: "https://images.unsplash.com/photo-1679068476679-5057c5c5d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        user_id: 1
    }

    request(app)
        .post('/api/v1/movie/add')
        // Set Token from JWT
        .set('access_token', AdminToken)
        .send(newMovie)
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.body.message).toBe('Movie created!')
            done()
        })
        .catch(done)
})

test('Update Movie', (done) => {
    const id = 74
    const updateMovie = {
        title: "Update Movie Newest"
    }

    request(app)
        .put(`/api/v1/movie/${id}`)
        .set('access_token', AdminToken)
        .send(updateMovie)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.message).toBe('Movie updated!')
            expect(response.body.data).toHaveProperty('title', updateMovie.title)
            done()
        })
        .catch(done)
})

test('Detail Movie', (done) => {
    const id = 74
    const updateMovie = {
        title: "Update Movie Newest"
    }

    request(app)
        .get(`/api/v1/movie/${id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.data).toHaveProperty('title', updateMovie.title)
            done()
        })
        .catch(done)
})

// test('Delete Movie', (done) => {
//     const id = 107

//     request(app)
//         .delete(`/api/v1/movie/${id}`)
//         .set('access_token', AdminToken)
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .then(response => {
//             expect(response.body.message).toBe('Movie deleted!')
//             done()
//         })
//         .catch(done)
// })