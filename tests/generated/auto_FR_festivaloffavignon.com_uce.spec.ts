import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_festivaloffavignon.com_uce', ['https://www.festivaloffavignon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
