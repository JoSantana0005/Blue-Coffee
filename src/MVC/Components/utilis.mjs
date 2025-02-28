import {createRequire} from 'module';
const require = createRequire(import.meta.url);
export const ReadJson = (path) => require(path);