import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_counciltax.info_0', ['https://www.counciltax.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
