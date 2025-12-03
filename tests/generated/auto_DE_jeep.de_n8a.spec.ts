import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jeep.de_n8a', ['https://www.jeep.de/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
