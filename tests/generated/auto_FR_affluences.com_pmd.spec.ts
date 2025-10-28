import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_affluences.com_pmd', ['https://affluences.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
