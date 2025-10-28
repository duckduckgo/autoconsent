import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalanguefrancaise.com_9mp', ['https://www.lalanguefrancaise.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
