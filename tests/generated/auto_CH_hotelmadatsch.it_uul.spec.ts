import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hotelmadatsch.it_uul', ['http://www.hotelmadatsch.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
