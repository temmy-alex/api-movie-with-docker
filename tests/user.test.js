const request = require('supertest')
const app = require('../app')

describe('Test Login Admin', () => {
    test('Test Login Using Admin Role', (done) => {
        const userAccount = {email: 'admin@mail.com', password: 'rahasia123'}

        request(app)
            .post('/api/v1/users/login')
            .send(userAccount)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.data.message).toBe('Successfully logged in!')
                done()
            }).catch(done)
    })
})
