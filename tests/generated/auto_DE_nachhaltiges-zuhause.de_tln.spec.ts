import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nachhaltiges-zuhause.de_tln', ['https://www.nachhaltiges-zuhause.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
