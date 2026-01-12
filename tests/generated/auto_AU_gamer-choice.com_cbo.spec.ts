import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gamer-choice.com_cbo', ['https://gamer-choice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
