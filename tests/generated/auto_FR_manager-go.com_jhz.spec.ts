import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_manager-go.com_jhz', ['https://www.manager-go.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
