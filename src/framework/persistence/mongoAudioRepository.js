
import AudioRepository from '../../application/contracts/audioRepository.js'

export default class MongoAudioRepository extends AudioRepository {

  constructor (dbConnection) {
    super();
    this.dbConnection = dbConnection
  }

  async insert (audio) {
    return await this.dbConnection
      .collection('audio')
      .insertOne(audio);
  }

  async getByHashUrl (hashUrl) {
    return await this.dbConnection
      .collection('audio')
      .findOne({ hashUrl })
  }

  async list() {
    const result = await this.dbConnection.collection('audio').find({})
    return result.toArray()
  }

}