import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_forum.arkivverket.no_3x4', ['https://forum.arkivverket.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
