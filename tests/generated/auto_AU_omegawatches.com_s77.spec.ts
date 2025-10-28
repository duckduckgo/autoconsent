import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_omegawatches.com_s77', ['https://www.omegawatches.com/en-au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
