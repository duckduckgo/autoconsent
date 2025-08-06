import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jeep.de_c1b', ['https://www.jeep.de/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
