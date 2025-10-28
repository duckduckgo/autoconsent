import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recettescarnees.com_gb0', ['https://recettescarnees.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
