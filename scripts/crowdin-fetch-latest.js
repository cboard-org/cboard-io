const { CROWDIN_API_KEY } = require('./config');

console.log('Pulling translations from CrowdIn.');

const https = require('https');
const fs = require('fs');
const resolve = require('path').resolve;
const DecompressZip = require('decompress-zip');

const zipFilePath = resolve('./alltx.zip');
const extractPath = resolve('./_i18n');

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

const extractTranslations = () => {
  console.log('Extracting zip to translations folder.');

  const unzipper = new DecompressZip(zipFilePath);

  unzipper.on('error', function (err) {
    console.log('DecompressZip Caught an error:', err);
  });

  unzipper.on('extract', function (log) {
    console.log('DecompressZip finished extracting.');
    const dirs = fs.readdirSync(helpLangExtractPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    //copy and rename help files 
/*     dirs.forEach(dir => {
      fs.copyFileSync(`${helpLangExtractPath}/${dir}/help/help.md`, `${helpExtractPath}/${dir}.md`);
    });
    // delete directory recursively
    try {
      fs.rmdirSync(`${extractPath}/website`, { recursive: true });
      console.log(`website folded was deleted.`);
    } catch (err) {
      console.error(`Error while deleting ${extractPath}/website`);
    }
    deleteTemporaryDownloadFile();
    //handle special cases for custom languages
    const custom = [
      {
        source: 'me-ME',
        dest: 'sr-ME'
      },
      {
        source: 'sr-CS',
        dest: 'sr-RS'
      }
    ];
    custom.forEach(data => {
      fs.copyFileSync(`${extractPath}/${data.source}.json`, `${extractPath}/${data.dest}.json`);
      fs.copyFileSync(`${helpExtractPath}/${data.source}.md`, `${helpExtractPath}/${data.dest}.md`);
    }); */
  });

  unzipper.on('progress', function (fileIndex, fileCount) {
    console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
  });

  unzipper.extract({
    path: extractPath
  });
};

downloadCboardJson(() => null);
downloadTranslations(extractTranslations);
