import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_atlasobscura.com_1qi', ['https://www.atlasobscura.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
