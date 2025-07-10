import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_backstage.com_2kf', ['https://www.backstage.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
