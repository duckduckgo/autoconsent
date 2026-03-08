import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_directory.goodonyou.eco_8qo', ['https://directory.goodonyou.eco/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
