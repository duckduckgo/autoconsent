import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_community.oracle.com_p1t', ['https://community.oracle.com/hub/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
