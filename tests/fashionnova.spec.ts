import generateCMPTests from '../playwright/runner';

generateCMPTests('fashionnova', ['https://www.fashionnova.com/'], {
    onlyRegions: ['US'],
});
