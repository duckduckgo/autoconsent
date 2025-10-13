import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_solesavy.com_8q6', ['https://solesavy.com/atoms-model-000-bitcoin-release-information/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
