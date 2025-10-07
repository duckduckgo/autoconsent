import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_offline-einkaufen.com_yf1', ['https://www.offline-einkaufen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
