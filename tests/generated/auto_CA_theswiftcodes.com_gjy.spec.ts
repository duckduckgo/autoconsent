import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_theswiftcodes.com_gjy', ['https://www.theswiftcodes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
