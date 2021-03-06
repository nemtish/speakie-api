
import createHash from '../util/createHash.js';
import insertAudio from '../application/use-cases/insert-audio.js';
import listAudio from '../application/use-cases/list-audio.js';
import getAudio from '../application/use-cases/get-audio.js';

export default (dependencies) => {

	const { audioRepository } = dependencies.DatabaseService;

	const insert = async (req, res, next) => {
		const InsertAudioCommand = insertAudio(audioRepository, createHash);
		const { binary, duration } = req.body;

		try {
			const audio = await InsertAudioCommand.Execute(binary, duration);
			res.json({
				success: true,
				message: 'Audio inserted successfully',
				data: audio
			});

		} catch (e) {
			next(e);
		}
	}

	const get = async (req, res, next) => {
		const GetAudioCommand = getAudio(audioRepository)
		const audioHashUrl = req.query.hash
		console.log(audioHashUrl)
		try {
			const audio = await GetAudioCommand.Execute(audioHashUrl)
			res.json({
				success: true,
				message: 'Audio found successfully',
				data: audio
			})
		} catch (e) {
			next(e)
		}
	}

	const list = async (req, res, next) => {
		const ListAudioCommand = listAudio(audioRepository);
		try {
			const audioList = await ListAudioCommand.Execute();
			res.json({
				success: true,
				message: 'Audio list',
				data: audioList
			});
		} catch (e) {
			next(e);
		}
	} 

	return {
		insert,
		get,
		list
	}

}
// exports.save = (req, res) => {
// 	const ipAddress = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
// 	AudioRepository.create(ipAddress, req.body.binary, req.body.duration).then(
// 		doc => res.send(doc),
//         err => console.error('Failed to save audio:', err)
// 	)
// };

// exports.show = (req, res) => {
// 	AudioRepository.showAll().then(
// 		docs => res.send(docs),
// 		err => console.error('Failed to load documents', err)
// 	)
// };

// exports.load = (req, res) => {
// 	AudioRepository.load(req.query.hash).then(
//         doc => res.send(doc),
//         err => console.error('Failed to load audio:', err)
// 	)
// };