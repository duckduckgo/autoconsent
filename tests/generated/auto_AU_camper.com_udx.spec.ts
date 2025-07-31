import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_camper.com_udx', ['https://www.camper.com/en_AU'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
