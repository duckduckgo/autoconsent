import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-rasenmaeher.de_mbr', ['https://der-rasenmaeher.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
