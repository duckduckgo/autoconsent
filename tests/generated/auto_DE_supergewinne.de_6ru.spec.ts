import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_supergewinne.de_6ru', ['https://www.supergewinne.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
