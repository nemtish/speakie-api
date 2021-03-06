const Database = require("arangojs").Database;
let db = null;

const init = () => {
    db = new Database();
    db.useBasicAuth("root", "lulika85");
    db.useDatabase("speaky");

    createCollections(db);
    return db;
}

const getInstance = async () => {
	return db === null ? init() : db;
};

function createCollections(db) {
    db.collection('audio').exists().then(exists => {
        if (!exists) {
            db.collection('audio').create().then(
                () => console.log('Audio collection created'),
                err => console.error('Error creating audio collection ' + err)
            );
        }
    })
}

module.exports = { getInstance };
