import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_quechoisir.org_m6q', ['https://www.quechoisir.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
