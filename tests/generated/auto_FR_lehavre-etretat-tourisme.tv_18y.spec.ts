import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lehavre-etretat-tourisme.tv_18y', ['https://lehavre-etretat-tourisme.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
