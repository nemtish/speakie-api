import MongoDB from '../framework/persistence/mongoDatabaseService.js';

const DatabaseService = new MongoDB()
const projectDependencies = Object.freeze({
    DatabaseService
})

export default projectDependencies
export { DatabaseService }