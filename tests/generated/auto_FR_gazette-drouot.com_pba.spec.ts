import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gazette-drouot.com_pba', ['https://www.gazette-drouot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
