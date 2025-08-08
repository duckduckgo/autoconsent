import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_downloadtube.online_6qj', ['https://downloadtube.online/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
