import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_context.reverso.net_ky5', ['https://context.reverso.net/translation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
