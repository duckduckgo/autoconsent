import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.fridayparts.com_vzp', ['https://ca.fridayparts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
