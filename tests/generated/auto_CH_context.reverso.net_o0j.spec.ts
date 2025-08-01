import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_context.reverso.net_o0j', ['https://context.reverso.net/translation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
