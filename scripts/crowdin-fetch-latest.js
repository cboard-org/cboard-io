const { CROWDIN_API_KEY } = require('./config');

console.log('Pulling translations from CrowdIn.');

const https = require('https');
const fs = require('fs-extra')
const resolve = require('path').resolve;
const DecompressZip = require('decompress-zip');

const zipFilePath = resolve('./alltx.zip');
const extractPath = resolve('./_i18n/temp');
const destPath = resolve('./_i18n');

const downloadTranslations = onComplete => {
  console.log('Trying to download latest translation strings...');

  const allTxZip = fs.createWriteStream(zipFilePath);
  https.get(
    `https://api.crowdin.com/api/project/cboard/download/all.zip?key=${CROWDIN_API_KEY}`,
    function (response) {
      response.pipe(allTxZip);
      allTxZip.on('finish', function () {
        console.log('Translation download complete.');
        allTxZip.close(onComplete);
      });
      allTxZip.on('error', function (err) {
        console.log('Translation download encountered error!');
        console.log(err);
      });
    }
  );
};

const deleteTemporaryDownloadFile = () => {
  console.log('Deleting temp file.');
  fs.unlinkSync(zipFilePath);
};

const copyFiles = data => {
  try {
    fs.copySync(`${extractPath}/website/i18n/${data.source}`, `${destPath}/${data.dest}`);
    fs.copySync(`${extractPath}/website/${data.source}.yml`, `${destPath}/${data.dest}.yml`);
    
    console.log('Sucess copy of ' + data.dest);
  } catch (err) {
    console.error(err)
  }
};

const extractTranslations = () => {
  console.log('Extracting zip to translations folder.');

  const unzipper = new DecompressZip(zipFilePath);

  unzipper.on('error', function (err) {
    console.log('DecompressZip Caught an error:', err);
  });

  unzipper.on('extract', function (log) {
    console.log('DecompressZip finished extracting.');
    const dirs = fs.readdirSync(extractPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    //copy and rename files 
    const custom = [
      {
        source: 'en-US',
        dest: 'en'
      },
      {
        source: 'es-ES',
        dest: 'es'
      },
      {
        source: 'de-DE',
        dest: 'de'
      },
      {
        source: 'fr-FR',
        dest: 'fr'
      },
      {
        source: 'hr-HR',
        dest: 'hr'
      },
      {
        source: 'it-IT',
        dest: 'it'
      },
      {
        source: 'sr-CS',
        dest: 'sr'
      }
    ];
    custom.forEach(data => {
      copyFiles(data);
    });
    // delete directory recursively
    deleteTemporaryDownloadFile();
    try {
      fs.rmdirSync(`${extractPath}`, { recursive: true });
      console.log(`website folded was deleted.`);
    } catch (err) {
      console.error(`Error while deleting ${extractPath}`);
    }
  });

  unzipper.on('progress', function (fileIndex, fileCount) {
    console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
  });

  unzipper.extract({
    path: extractPath
  });
};

downloadTranslations(extractTranslations);
