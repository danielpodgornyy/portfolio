import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import getPath from './getPath.js';
import readJSONArray from './readJSONArray.js';

// Any object that will include a timestamp
interface inputType {
  timestamp: string
}

async function appendJSON(input: inputType, filename: string) {
  try {
    // Extracts the JSON array
    let JSONObjectArray = await readJSONArray<object>('json/messages.json');

    // Add a tilestamp to the input
    input['timestamp'] = new Date().toISOString();

    // Append new JSON
    JSONObjectArray.push(input);

    // Write it back
    const JSONFilePath = getPath('json/messages.json')
    await writeFile(JSONFilePath, JSON.stringify(JSONObjectArray, null, 2), 'utf-8');

  } catch (error: any) {
    throw new Error('Failed to write file: ' + error.message);
  }
}

export default appendJSON;
