import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_localiser.laposte.fr_8wg', ['https://localiser.laposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
