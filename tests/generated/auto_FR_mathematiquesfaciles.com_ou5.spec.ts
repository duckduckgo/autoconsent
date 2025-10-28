import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mathematiquesfaciles.com_ou5', ['https://www.mathematiquesfaciles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
