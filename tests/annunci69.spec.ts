import generateCMPTests from '../playwright/runner';

generateCMPTests('annunci69.it', ['https://www.annunci69.it/'], {
    onlyRegions: ['IT'],
});
