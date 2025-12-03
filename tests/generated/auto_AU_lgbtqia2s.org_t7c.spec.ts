import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lgbtqia2s.org_t7c', ['https://www.lgbtqia2s.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
