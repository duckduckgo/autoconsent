import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-bar-eu', ['https://slimbook.com/', 'https://government.bg/', 'https://federalismi.it/']);

// these sites only show the banner to EU visitors
generateCMPTests('cookie-bar-eu', ['https://afloat.ie/', 'https://www.manualsdir.com/'], {
    skipRegions: ['US'],
});
