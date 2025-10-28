import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_techradar.com_fl1', ['https://global.techradar.com/fr-fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
