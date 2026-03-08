import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_christundbuch.de_27v', ['https://christundbuch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
