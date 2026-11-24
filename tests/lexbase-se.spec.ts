import generateCMPTests from '../playwright/runner';

generateCMPTests('lexbase.se', ['https://lexbase.se/'], {
    skipRegions: ['US'],
});
