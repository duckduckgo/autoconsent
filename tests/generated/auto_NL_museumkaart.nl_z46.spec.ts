import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_museumkaart.nl_z46', ['https://www.museum.nl/nl/museumkaart'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
