import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arpagaustextil.ch_5fa', ['https://arpagaustextil.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
