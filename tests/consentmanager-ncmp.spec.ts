import generateCMPTests from '../playwright/runner';

generateCMPTests('consentmanager-ncmp', ['https://www.royalroad.com/', 'https://www.lolalytics.com/'], {
    onlyRegions: ['DE'],
});
