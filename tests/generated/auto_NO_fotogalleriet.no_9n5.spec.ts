import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fotogalleriet.no_9n5', ['https://fotogalleriet.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
