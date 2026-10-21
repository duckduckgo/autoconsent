import generateCMPTests from '../playwright/runner';

generateCMPTests('erli.pl', ['https://erli.pl/'], {
    onlyRegions: ['PL'],
});
