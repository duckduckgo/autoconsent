import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guide-du-paysbasque.com_far', ['https://www.guide-du-paysbasque.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
