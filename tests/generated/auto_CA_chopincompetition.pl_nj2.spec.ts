import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chopincompetition.pl_nj2', ['https://www.chopincompetition.pl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
