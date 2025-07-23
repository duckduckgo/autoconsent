import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lesschwab.com_cj8', ['https://www.lesschwab.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
