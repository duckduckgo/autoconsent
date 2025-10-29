import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_frankwatching.com_0ya', ['https://www.frankwatching.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
