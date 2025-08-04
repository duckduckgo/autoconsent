import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stuartslondon.com_0', ['https://www.stuartslondon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
