import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_quechoisir.org_a6k', ['https://www.quechoisir.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
