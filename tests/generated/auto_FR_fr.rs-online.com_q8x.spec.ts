import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.rs-online.com_q8x', ['https://fr.rs-online.com/web/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
