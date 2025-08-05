import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wilderkaiser.info_uoc', ['https://www.wilderkaiser.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
