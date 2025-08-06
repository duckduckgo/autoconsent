import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kskbb.de_8ze', ['https://www.kskbb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
