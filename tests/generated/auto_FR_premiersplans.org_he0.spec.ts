import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_premiersplans.org_he0', ['https://www.premiersplans.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
