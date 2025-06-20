import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_forum.ovoenergy.com_0', ['https://forum.ovoenergy.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
