import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.helperformance.com_mh8', ['https://au.helperformance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
