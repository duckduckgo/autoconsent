import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.aegeanair.com_2zy', ['https://en.aegeanair.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
