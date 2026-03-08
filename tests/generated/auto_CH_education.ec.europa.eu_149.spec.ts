import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_education.ec.europa.eu_149', ['https://education.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
