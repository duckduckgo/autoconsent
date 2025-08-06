import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_placement.meilleurtaux.com_9zf', ['https://placement.meilleurtaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
