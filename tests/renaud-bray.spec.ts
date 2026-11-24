import generateCMPTests from '../playwright/runner';

generateCMPTests('renaud-bray', ['https://www.renaud-bray.com/'], {
    onlyRegions: ['CA'],
});
