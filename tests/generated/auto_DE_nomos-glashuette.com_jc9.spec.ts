import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nomos-glashuette.com_jc9', ['https://nomos-glashuette.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
