import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nachhaltiges-zuhause.de_w8n', ['https://www.nachhaltiges-zuhause.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
