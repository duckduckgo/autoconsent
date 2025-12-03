import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_typografie.info_mnj', ['https://www.typografie.info/3/startseite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
