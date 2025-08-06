import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_downloadtube.online_edf', ['http://downloadtube.online/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
