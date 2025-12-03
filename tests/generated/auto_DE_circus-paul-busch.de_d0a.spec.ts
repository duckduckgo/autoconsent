import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_circus-paul-busch.de_d0a', ['https://www.circus-paul-busch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
