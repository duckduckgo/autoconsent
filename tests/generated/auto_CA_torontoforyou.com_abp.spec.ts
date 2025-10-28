import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_torontoforyou.com_abp', ['https://torontoforyou.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
