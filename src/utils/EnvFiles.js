class EnvFile {
    constructor() { }

    CheckEnvFiles(process) {
        if (process === 'test') {
            return '.env.test';
        } else if (process === 'dev') {
            return '.env.dev';
        } else {
            return '.env'
        }
    }
}

module.exports = new EnvFile();