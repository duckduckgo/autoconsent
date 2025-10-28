import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rte-france.com_v06', ['https://www.rte-france.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
