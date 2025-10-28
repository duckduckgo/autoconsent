import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mobile.viewsurf.com_y7b', ['https://mobile.viewsurf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
