import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_avantixlearning.ca_88p', ['https://www.avantixlearning.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
