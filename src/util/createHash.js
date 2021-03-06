
import crypto from 'crypto'

export default (hashValue) => {
    return crypto.createHash('md5').update(hashValue).digest('hex');
}