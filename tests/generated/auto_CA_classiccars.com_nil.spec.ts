import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_classiccars.com_nil', ['https://classiccars.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
