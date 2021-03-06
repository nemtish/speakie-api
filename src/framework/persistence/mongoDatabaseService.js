import mongodb from 'mongodb'
import MongoAudioRepository from './mongoAudioRepository.js'
import DatabaseService from '../../application/contracts/databaseService.js'

export default class MongoDatabaseService extends DatabaseService {

    async initDatabase () {
        const dbName = process.env.DB_NAME
        const { MongoClient } = mongodb
        const client = new MongoClient(`${process.env.DB_URL}/${dbName}`, { useNewUrlParser: true })

        try {
            // Connect to the MongoDB cluster
            await client.connect()
            this.db = client.db(dbName)
        } catch (e) {
            console.error(e)
            process.exit(e.message)
        // } finally {
            // await client.close();
        }
    }

    get audioRepository () {
        if (!this.db) {
            throw new Error('Database not initialized!')
        }
        return new MongoAudioRepository(this.db)
    }
}