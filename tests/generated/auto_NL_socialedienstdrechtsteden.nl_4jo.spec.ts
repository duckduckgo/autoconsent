import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_socialedienstdrechtsteden.nl_4jo', ['https://www.socialedienstdrechtsteden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
