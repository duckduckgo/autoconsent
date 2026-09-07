import generateCMPTests from '../playwright/runner';

generateCMPTests('pandectes', ['https://www.loopearplugs.com/'], {
    mobile: true,
    onlyRegions: ['US'],
    testOptIn: false,
});
