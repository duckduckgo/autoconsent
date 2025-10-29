import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_explorelivewebcams.com_2s5', ['https://www.explorelivewebcams.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
