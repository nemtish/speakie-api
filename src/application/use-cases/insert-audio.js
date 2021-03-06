import Audio from '../entities/audio.entity.js'

export default (AudioRepository, createHash) => {
    async function Execute (binary, duration) {

        const dateTime = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
        const hashUrl = createHash(`audio-${dateTime}`);

        let audio = new Audio(hashUrl, binary, duration, dateTime);

        // insert audio
        audio = await AudioRepository.insert(audio);
        return audio.ops[0];
    }

    return {
        Execute
    }
}