import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ggzingeest.nl_2p5', ['https://www.ggzingeest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
