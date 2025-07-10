import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_newrepublic.com_bdt', ['https://newrepublic.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
