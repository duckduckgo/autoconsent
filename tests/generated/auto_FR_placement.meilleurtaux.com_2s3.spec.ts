import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_placement.meilleurtaux.com_2s3', ['https://placement.meilleurtaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
