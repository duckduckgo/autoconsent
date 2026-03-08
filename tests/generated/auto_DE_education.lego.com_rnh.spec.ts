import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_education.lego.com_rnh', ['https://education.lego.com/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
