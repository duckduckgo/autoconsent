import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lesschwab.com_a4k', ['https://www.lesschwab.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
