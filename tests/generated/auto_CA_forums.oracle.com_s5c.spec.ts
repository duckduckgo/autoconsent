import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forums.oracle.com_s5c', ['https://forums.oracle.com/ords/r/apexds/community/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
