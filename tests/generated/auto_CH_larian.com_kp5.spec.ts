import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_larian.com_kp5', ['https://larian.com/support/faqs/steam-deck-native-version_121'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
