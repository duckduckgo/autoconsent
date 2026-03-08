import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dukeslancaster.org_jhv', ['https://dukeslancaster.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
