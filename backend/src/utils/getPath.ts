import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

type RelativePath = string;
type AbsolutePath = string;

// Gets the absolute path of a path starting from the base directory of the project
function getPath(pathToFind: RelativePath): AbsolutePath {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const baseDir = resolve(__dirname, '..', '..');

  return resolve(baseDir, pathToFind);
}

export default getPath;
