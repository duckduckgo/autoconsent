import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_patienteninfo-service.de_pr4', ['https://www.patienteninfo-service.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
