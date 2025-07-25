import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_op.europa.eu_tgz', ['https://op.europa.eu/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
