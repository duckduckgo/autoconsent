import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stadholland.nl_alb', ['https://www.stadholland.nl/Consumenten'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
