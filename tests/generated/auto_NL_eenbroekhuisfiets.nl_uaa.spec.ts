import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eenbroekhuisfiets.nl_uaa', ['https://broekhuis.nl/fietsen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
