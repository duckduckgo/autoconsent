import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_careers.richemont.com_28y', ['https://careers.richemont.com/en/jobs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
