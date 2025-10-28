import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hockeyfrance.com_nak', ['https://www.hockeyfrance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
