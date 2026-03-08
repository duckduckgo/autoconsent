import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_discovery.nus.edu.sg_6yj', ['https://discovery.nus.edu.sg/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
