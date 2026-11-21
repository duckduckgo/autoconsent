import generateCMPTests from '../playwright/runner';

generateCMPTests('vonmaur', ['https://www.vonmaur.com/'], {
    onlyRegions: ['US'],
});
