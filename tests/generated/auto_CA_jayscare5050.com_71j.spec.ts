import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_jayscare5050.com_71j', ['https://jayscare5050.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
