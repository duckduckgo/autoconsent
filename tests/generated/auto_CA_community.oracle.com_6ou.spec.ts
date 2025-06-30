import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_community.oracle.com_6ou', ['https://community.oracle.com/hub/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
