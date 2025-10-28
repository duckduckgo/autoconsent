import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_histoire-image.org_l0i', ['https://histoire-image.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
