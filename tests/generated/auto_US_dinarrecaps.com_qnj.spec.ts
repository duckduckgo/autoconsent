import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dinarrecaps.com_qnj', ['https://dinarrecaps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
