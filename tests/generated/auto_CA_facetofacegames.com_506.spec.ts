import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_facetofacegames.com_506', ['https://facetofacegames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
