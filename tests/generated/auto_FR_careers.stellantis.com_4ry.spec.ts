import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_careers.stellantis.com_4ry', ['https://careers.stellantis.com/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
