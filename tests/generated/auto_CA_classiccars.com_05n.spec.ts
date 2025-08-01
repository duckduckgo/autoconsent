import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_classiccars.com_05n', ['https://classiccars.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
