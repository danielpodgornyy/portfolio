import { readFile, access, constants } from 'fs/promises';
import getPath from './getPath.js';
// Takes in a relative path of a json file, reads it and returns its objects, otherwise it returns []
async function readJSONArray(JSONPath) {
    const JSONFilePath = getPath(JSONPath);
    // Either read from the json file if it exists or create a new array
    let JSONObjectArray = [];
    try {
        await access(JSONFilePath, constants.F_OK);
        const data = await readFile(JSONFilePath, 'utf-8');
        JSONObjectArray = JSON.parse(data);
    }
    catch (error) {
        throw new Error("Error parsing JSON: " + error);
    }
    return JSONObjectArray;
}
export default readJSONArray;
