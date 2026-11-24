import generateCMPTests from '../playwright/runner';

generateCMPTests('bgk.pl', ['https://www.bgk.pl/'], {
    onlyRegions: ['PL'],
});
