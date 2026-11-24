import generateCMPTests from '../playwright/runner';

generateCMPTests('Yahoo', ['https://ca.yahoo.com/', 'https://tw.yahoo.com/'], {
    skipRegions: ['US'],
});
