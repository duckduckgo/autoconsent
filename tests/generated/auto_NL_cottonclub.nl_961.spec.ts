import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cottonclub.nl_961', ['https://www.cottonclub.nl/nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
