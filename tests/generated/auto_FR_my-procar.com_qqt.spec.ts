import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_my-procar.com_qqt', ['https://www.my-procar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
