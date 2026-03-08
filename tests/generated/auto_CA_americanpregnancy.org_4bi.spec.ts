import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_americanpregnancy.org_4bi', ['https://americanpregnancy.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
