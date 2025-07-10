import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_classmates.com_200', ['https://www.classmates.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
