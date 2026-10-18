import generateCMPTests from '../playwright/runner';

generateCMPTests('ilovepdf', ['https://www.ilovepdf.com/', 'https://www.iloveimg.com/'], {
    skipRegions: ['US'],
});
