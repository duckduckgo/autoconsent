import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_euremotejobs.com_jg1', ['https://euremotejobs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
