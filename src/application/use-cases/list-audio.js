
export default (AudioRepository) => {

    async function Execute () {
        return AudioRepository.list();
    }

    return {
        Execute
    };
}