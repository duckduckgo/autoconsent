import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_filingreader.com_ky3', ['https://filingreader.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
