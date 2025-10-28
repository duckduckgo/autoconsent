import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_2xko.riotgames.com_ucl', ['https://2xko.riotgames.com/fr-fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
