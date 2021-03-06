
export default (AudioRepository) => {
    async function Execute (hashUrl) {
        // get audio
        const audio = await AudioRepository.getByHashUrl(hashUrl);
        return audio;
    }

    return {
        Execute
    }
}