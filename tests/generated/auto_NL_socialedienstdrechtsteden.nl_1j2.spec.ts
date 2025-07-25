import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_socialedienstdrechtsteden.nl_1j2', ['https://www.socialedienstdrechtsteden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
