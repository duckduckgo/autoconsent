import generateCMPTests from '../playwright/runner';

generateCMPTests('ionos.de', ['https://ionos.de'], {
    skipRegions: ['US', 'FR', 'GB'],
});

generateCMPTests('ionos.de', ['https://www.ionos.co.uk/'], {
    onlyRegions: ['GB'],
});

generateCMPTests('ionos.de', ['https://www.ionos.fr/'], {
    onlyRegions: ['FR'],
    testSelfTest: false,
});
