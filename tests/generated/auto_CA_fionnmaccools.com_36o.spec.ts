import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fionnmaccools.com_36o', ['https://fionnmaccools.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
