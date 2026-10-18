import generateCMPTests from '../playwright/runner';

generateCMPTests('swissquote', ['https://www.swissquote.ch/'], {
    onlyRegions: ['CH'],
});
