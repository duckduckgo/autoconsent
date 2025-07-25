import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aircanada.com_0', ['https://www.aircanada.com/home/uk/en/aco/flights'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
