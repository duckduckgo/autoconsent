import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_explorelivewebcams.com_qjf', ['https://www.explorelivewebcams.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
