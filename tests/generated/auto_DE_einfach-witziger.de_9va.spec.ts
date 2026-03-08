import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_einfach-witziger.de_9va', ['https://einfach-witziger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
