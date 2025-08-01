import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vvrbank-krp.de_nfa', ['https://www.vvrbank-krp.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
