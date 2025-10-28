import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_homecinema-fr.com_qvy', ['https://www.homecinema-fr.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
