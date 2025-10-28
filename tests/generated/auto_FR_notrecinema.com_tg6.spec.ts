import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_notrecinema.com_tg6', ['https://www.notrecinema.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
