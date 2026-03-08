import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deine-ernaehrung.de_6ns', ['https://deine-ernaehrung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
