import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_animationdigitalnetwork.com_uuy', ['https://animationdigitalnetwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
