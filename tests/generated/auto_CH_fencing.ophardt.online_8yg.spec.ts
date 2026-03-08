import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fencing.ophardt.online_8yg', ['https://fencing.ophardt.online/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
