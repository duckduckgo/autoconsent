import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pitboss-grills.com_yos', ['https://www.pitboss-grills.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
