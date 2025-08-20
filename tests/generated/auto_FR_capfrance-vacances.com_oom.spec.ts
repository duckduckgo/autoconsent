import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_capfrance-vacances.com_oom', ['https://capfrance-vacances.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
