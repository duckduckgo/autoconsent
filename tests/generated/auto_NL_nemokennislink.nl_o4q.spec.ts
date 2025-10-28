import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nemokennislink.nl_o4q', ['https://www.nemokennislink.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
