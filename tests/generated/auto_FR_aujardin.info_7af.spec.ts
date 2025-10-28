import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aujardin.info_7af', ['https://www.aujardin.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
