import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_degrotehamersma.nl_817', ['https://www.degrotehamersma.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
