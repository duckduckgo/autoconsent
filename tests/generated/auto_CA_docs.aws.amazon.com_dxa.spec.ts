import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.aws.amazon.com_dxa', ['https://docs.aws.amazon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
