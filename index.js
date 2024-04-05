import {readFileSync, promises as fsPromises} from 'fs';

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(
      filename,
      'utf-8',
    );

    const arr = contents.split(/\r?\n/);

    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile('./example.txt');
