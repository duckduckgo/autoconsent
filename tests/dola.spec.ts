import generateCMPTests from '../playwright/runner';

generateCMPTests('dola', ['https://www.dola.com/'], {
    skipRegions: ['US'],
});
