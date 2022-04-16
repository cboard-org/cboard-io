const crowdinTranslations = require('@crowdin/crowdin-api-client').Translations;

const CROWDIN_TOKEN = process.env.CROWDIN_PERSONAL_TOKEN;
const CROWDIN_PROJECT_ID = 262825;

// initialization of crowdin client
const credentials = {
  token: CROWDIN_TOKEN
};
const api = new crowdinTranslations(credentials);

const https = require('https');
const fs = require('fs');
const resolve = require('path').resolve;
const DecompressZip = require('decompress-zip');
const fse = require('fs-extra');

const zipFilePath = resolve('./alltx.zip');
const extractPath = resolve('./downloads');
const langPath = resolve('./_i18n');

const downloadTranslations = async onComplete => {
  console.log('Trying to download latest translation strings...');

  // get project build
  const build = await api.listProjectBuilds(CROWDIN_PROJECT_ID);
  const buildId = build.data[0].data.id;
  const download = await api.downloadTranslations(CROWDIN_PROJECT_ID, buildId);
  const allTxZip = fs.createWriteStream(zipFilePath);
  https.get(download.data.url, function (response) {
    response.pipe(allTxZip);
    allTxZip.on('finish', function () {
      console.log('Translation download complete.');
      allTxZip.close(onComplete);
    });
    allTxZip.on('error', function (err) {
      console.log('Translation download encountered error!');
      console.log(err);
    });
  });
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

  const languages = [
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
    },
    {
      source: 'mk-MK',
      dest: 'mk'
    }
  ];

  unzipper.on('extract', function (log) {
    console.log('DecompressZip finished extracting.');
    //copy and rename files
    languages.forEach(lang => {
      fs.copyFileSync(
        `${extractPath}/website/${lang.source}.yml`,
        `${langPath}/${lang.dest}.yml`
      );
    });
    languages.forEach((lang, index) => {
      // copy source folder to destination
      fse.copy(
        `${extractPath}/website/i18n/${lang.source}`,
        `${langPath}/${lang.dest}/`, function (err) {
          if (err) {
            console.log('An error occured while copying the folder.')
            return console.error(err)
          }
          console.log('Copy completed!')
          if (index === languages.length-1) {
            try {
              fs.rmdirSync(`${extractPath}`, { recursive: true });
              console.log(`download folder was deleted.`);
            } catch (err) {
              console.error(`Error while deleting ${extractPath}`);
            }
          }
        });
    });

    deleteTemporaryDownloadFile();
  });

  unzipper.on('progress', function (fileIndex, fileCount) {
    console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
  });

  unzipper.extract({
    path: extractPath
  });
};

downloadTranslations(extractTranslations);
