import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_appareilsmobiles.fr_3ue', ['https://www.appareilsmobiles.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
