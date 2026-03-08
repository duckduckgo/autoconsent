import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_frisiamakelaars.nl_8nw', ['https://frisiamakelaars.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
