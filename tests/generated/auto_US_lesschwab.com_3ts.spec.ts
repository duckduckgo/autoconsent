import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lesschwab.com_3ts', ['https://www.lesschwab.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
