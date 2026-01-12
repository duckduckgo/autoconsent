import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_frankwatching.com_fb7', ['https://www.frankwatching.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
