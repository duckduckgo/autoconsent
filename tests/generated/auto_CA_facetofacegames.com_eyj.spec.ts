import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_facetofacegames.com_eyj', ['https://facetofacegames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
