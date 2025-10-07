import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_socialedienstdrechtsteden.nl_a12', ['https://www.socialedienstdrechtsteden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
