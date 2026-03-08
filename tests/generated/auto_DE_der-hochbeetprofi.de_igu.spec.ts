import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-hochbeetprofi.de_igu', ['https://der-hochbeetprofi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
