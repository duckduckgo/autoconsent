import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_classicwowarmory.com_v96', ['https://classicwowarmory.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
