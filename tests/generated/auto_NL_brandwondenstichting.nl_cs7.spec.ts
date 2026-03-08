import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brandwondenstichting.nl_cs7', ['https://brandwondenstichting.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
