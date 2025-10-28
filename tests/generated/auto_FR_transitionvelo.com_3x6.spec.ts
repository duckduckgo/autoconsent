import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_transitionvelo.com_3x6', ['https://www.transitionvelo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
