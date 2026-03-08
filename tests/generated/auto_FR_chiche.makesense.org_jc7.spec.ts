import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chiche.makesense.org_jc7', ['https://chiche.makesense.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
