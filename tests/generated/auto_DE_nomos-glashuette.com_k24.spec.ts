import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nomos-glashuette.com_k24', ['https://nomos-glashuette.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
