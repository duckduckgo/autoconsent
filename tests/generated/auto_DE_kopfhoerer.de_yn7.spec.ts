import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kopfhoerer.de_yn7', ['https://www.kopfhoerer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
