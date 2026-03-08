import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_e-justice.europa.eu_jxy', ['https://e-justice.europa.eu/select-language?destination=/node/2'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
