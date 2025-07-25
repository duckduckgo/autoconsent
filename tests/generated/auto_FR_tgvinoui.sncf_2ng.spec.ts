import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tgvinoui.sncf_2ng', ['https://www.tgvinoui.sncf/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
