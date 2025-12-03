import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wilderkaiser.info_shg', ['https://www.wilderkaiser.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
