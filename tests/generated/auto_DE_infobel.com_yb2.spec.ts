import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_infobel.com_yb2', ['https://www.infobel.com/fr/world'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
