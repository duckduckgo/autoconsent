import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adherer.digiposte.fr_6j9', ['https://adherer.digiposte.fr/spa/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
