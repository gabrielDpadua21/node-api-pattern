const UserRepository = require('../../src/repositorys/UserRepository');

describe('Create new users', () => {
    it('Should be create a new user', async () => {

        const user = await UserRepository.create({
            name: "gabriel",
            email: "gabriel@gmail.com",
            password: "123456"
        })

        expect(user.email).toBe('gabriel@gmail.com');
    });
});