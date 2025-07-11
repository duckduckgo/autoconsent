import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sanluisobispo.com_5jh', ['https://www.sanluisobispo.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
