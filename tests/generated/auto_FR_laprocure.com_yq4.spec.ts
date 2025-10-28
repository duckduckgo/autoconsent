import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_laprocure.com_yq4', ['https://www.laprocure.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
