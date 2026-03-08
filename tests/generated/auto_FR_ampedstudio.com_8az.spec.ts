import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ampedstudio.com_8az', ['https://ampedstudio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
