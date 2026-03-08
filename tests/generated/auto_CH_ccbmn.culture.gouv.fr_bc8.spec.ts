import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ccbmn.culture.gouv.fr_bc8', ['https://ccbmn.culture.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
