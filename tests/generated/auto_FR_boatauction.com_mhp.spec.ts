import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boatauction.com_mhp', ['https://boatauction.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
