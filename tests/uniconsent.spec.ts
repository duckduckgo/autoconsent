import generateCMPTests from '../playwright/runner';

generateCMPTests('Uniconsent', ['https://www.sharethrough.com/', 'https://www.officialcharts.com/'], {});

generateCMPTests('Uniconsent', ['http://soundchapter.com/', 'https://www.synonymer.se/', 'https://www.ruck.co.uk/'], {
    skipRegions: ['US'],
});
