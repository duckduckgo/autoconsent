import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fischerwohnmobile.de_13h', ['https://fischerwohnmobile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
