import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tgvinoui.sncf_7s1', ['https://www.tgvinoui.sncf/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
