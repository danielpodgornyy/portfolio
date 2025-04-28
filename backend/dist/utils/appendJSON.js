import { writeFile } from 'fs/promises';
import getPath from './getPath.js';
import readJSONArray from './readJSONArray.js';
async function appendJSON(input, filename) {
    try {
        // Extracts the JSON array
        let JSONObjectArray = await readJSONArray('json/messages.json');
        // Add a tilestamp to the input
        input['timestamp'] = new Date().toISOString();
        // Append new JSON
        JSONObjectArray.push(input);
        // Write it back
        const JSONFilePath = getPath('json/messages.json');
        await writeFile(JSONFilePath, JSON.stringify(JSONObjectArray, null, 2), 'utf-8');
    }
    catch (error) {
        throw new Error('Failed to write file: ' + error.message);
    }
}
export default appendJSON;
