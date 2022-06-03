import {access} from 'node:fs/promises';

export const FILE_EXIST = 'FILE_EXIST';

/**
 * Is file exists
 *
 * @param path
 * @returns {Promise<boolean>}
 */
export const fileExist = async (path) => {
    try {
        await access(path);
    } catch (e) {
        return false;
    }

    return true;
}
