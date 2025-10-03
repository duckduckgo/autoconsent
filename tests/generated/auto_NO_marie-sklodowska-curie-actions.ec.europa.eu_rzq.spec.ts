import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_marie-sklodowska-curie-actions.ec.europa.eu_rzq', ['https://marie-sklodowska-curie-actions.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
