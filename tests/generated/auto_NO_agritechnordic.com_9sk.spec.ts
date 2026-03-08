import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_agritechnordic.com_9sk', ['https://agritechnordic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
