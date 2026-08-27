import generateCMPTests from '../playwright/runner';

generateCMPTests('xvideos', ['https://www.xvideos.com/'], {
    onlyRegions: ['GB'],
});
