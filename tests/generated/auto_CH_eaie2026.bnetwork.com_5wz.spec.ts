import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eaie2026.bnetwork.com_5wz', ['https://eaie2026.bnetwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
