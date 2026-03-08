import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_foerdermittelkompass.reflecta.org_g1y', ['https://foerdermittelkompass.reflecta.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
