import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_solidworks.com_s3r', ['https://www.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
