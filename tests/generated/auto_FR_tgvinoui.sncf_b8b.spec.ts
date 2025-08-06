import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tgvinoui.sncf_b8b', ['https://www.tgvinoui.sncf/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
