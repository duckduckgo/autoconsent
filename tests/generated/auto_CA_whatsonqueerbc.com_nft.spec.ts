import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_whatsonqueerbc.com_nft', ['https://whatsonqueerbc.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
