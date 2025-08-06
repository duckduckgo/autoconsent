import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aircanada.com_us1', ['https://www.aircanada.com/home/de/de/aco/flights'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
