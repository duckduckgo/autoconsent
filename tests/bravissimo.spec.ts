import generateCMPTests from '../playwright/runner';

generateCMPTests('bravissimo', ['https://www.bravissimo.com/'], {
    skipRegions: ['US'],
});

generateCMPTests('bravissimo', ['https://www.bravissimo.com/us/'], {
    onlyRegions: ['US'],
});
