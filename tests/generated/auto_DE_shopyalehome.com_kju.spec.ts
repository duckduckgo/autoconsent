import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shopyalehome.com_kju', ['https://shopyalehome.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
