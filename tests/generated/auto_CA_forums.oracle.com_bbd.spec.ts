import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forums.oracle.com_bbd', ['https://forums.oracle.com/ords/r/apexds/community/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
