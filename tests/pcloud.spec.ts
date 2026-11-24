import generateCMPTests from '../playwright/runner';

generateCMPTests('pcloud', ['https://www.pcloud.com/'], {
    skipRegions: ['US'],
});
