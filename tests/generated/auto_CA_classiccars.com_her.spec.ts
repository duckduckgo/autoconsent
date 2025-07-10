import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_classiccars.com_her', ['https://classiccars.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
