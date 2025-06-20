import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_greateranglia.co.uk_0', ['https://www.greateranglia.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
