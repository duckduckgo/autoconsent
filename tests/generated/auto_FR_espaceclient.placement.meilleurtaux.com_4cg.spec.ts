import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espaceclient.placement.meilleurtaux.com_4cg', ['https://espaceclient.placement.meilleurtaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
