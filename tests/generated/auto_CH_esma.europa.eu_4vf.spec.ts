import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_esma.europa.eu_4vf', ['https://www.esma.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
