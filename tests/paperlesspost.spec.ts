import generateCMPTests from '../playwright/runner';

generateCMPTests('paperlesspost', ['https://www.paperlesspost.com/'], {
    onlyRegions: ['US'],
});
