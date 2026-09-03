import generateCMPTests from '../playwright/runner';

generateCMPTests('lacoccinelle.net', ['https://www.lacoccinelle.net/'], {
    testSelfTest: false,
    onlyRegions: ['FR'],
});
