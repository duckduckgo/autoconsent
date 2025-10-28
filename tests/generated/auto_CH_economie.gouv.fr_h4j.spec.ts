import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_economie.gouv.fr_h4j', ['https://www.economie.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
