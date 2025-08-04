import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_context.reverso.net_xvp', ['https://context.reverso.net/translation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
