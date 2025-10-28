import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anglaisfacile.com_ll5', ['https://www.anglaisfacile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
