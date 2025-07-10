import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gardenersworld.com_qek', ['https://www.gardenersworld.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
