import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_riverscasino.com_9nb', ['https://www.riverscasino.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
