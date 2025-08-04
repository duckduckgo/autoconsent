import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_downloadtube.online_utu', ['https://downloadtube.online/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
