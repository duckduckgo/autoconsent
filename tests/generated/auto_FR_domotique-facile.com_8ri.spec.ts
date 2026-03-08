import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_domotique-facile.com_8ri', ['https://domotique-facile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
