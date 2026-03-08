import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_awo-kreisverband-luebeck.de_vle', ['https://awo-kreisverband-luebeck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
