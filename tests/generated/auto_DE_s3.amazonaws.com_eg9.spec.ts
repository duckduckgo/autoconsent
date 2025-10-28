import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_s3.amazonaws.com_eg9', ['https://aws.amazon.com/s3/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
