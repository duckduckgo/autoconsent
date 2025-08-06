import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_botschaft-konsulat.de_jid', ['https://botschaft-konsulat.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
