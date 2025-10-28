import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kingston.com_mtz', ['https://www.kingston.com/unitedkingdom/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
