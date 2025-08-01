import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kskbb.de_999', ['https://www.kskbb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
