import mongoose from 'module';
import { save } from '../controller/audio.controller';
import Audio from '../entities/audio.entity';

export default class AudioRepository {

    async showAll() {
        return await Audio.find({});
    }

    async create(audioData) {
        const audio = new Audio(audioData);
        const savedAudio = await audio.save();
        return savedAudio;
    }

    async load(hash) {
        return await Audio.find({ hash: hash});
    }
}