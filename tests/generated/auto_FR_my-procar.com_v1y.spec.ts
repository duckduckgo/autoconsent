import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_my-procar.com_v1y', ['https://www.my-procar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
