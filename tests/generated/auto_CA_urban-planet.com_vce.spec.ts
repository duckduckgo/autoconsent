import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_urban-planet.com_vce', ['https://urban-planet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
