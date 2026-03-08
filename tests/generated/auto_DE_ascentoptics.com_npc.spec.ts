import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ascentoptics.com_npc', ['https://ascentoptics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
