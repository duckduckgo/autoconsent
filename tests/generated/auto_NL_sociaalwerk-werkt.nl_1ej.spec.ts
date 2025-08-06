import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sociaalwerk-werkt.nl_1ej', ['https://www.sociaalwerk-werkt.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
