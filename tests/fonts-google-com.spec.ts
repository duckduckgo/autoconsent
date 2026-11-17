import generateCMPTests from '../playwright/runner';

generateCMPTests('fonts.google.com', ['https://fonts.google.com/'], {
    skipRegions: ['NA', 'US'],
});
