import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sohotheatre.com_nsi', ['https://sohotheatre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
