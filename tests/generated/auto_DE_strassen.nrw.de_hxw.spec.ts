import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strassen.nrw.de_hxw', ['https://www.strassen.nrw.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
