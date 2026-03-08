import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_andreviger.com_ozu', ['https://andreviger.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
