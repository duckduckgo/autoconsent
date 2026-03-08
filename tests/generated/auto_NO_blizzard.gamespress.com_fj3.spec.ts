import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_blizzard.gamespress.com_fj3', ['https://blizzard.gamespress.com/SessionReadOnly/Http404'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
