import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bluecatnetworks.com_8mb', ['https://bluecatnetworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
