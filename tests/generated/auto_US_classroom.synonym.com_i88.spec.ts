import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_classroom.synonym.com_i88', ['https://classroom.synonym.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
