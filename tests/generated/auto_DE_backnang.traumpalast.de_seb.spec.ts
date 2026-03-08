import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_backnang.traumpalast.de_seb', ['https://backnang.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
