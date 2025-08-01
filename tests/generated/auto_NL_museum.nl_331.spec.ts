import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_museum.nl_331', ['https://www.museum.nl/nl/museumkaart'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
