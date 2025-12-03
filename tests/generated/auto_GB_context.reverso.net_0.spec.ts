import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_context.reverso.net_0', ['https://context.reverso.net/translation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
