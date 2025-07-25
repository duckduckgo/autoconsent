import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mieterhilfeverein.de_zzv', ['https://www.mieterhilfeverein.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
