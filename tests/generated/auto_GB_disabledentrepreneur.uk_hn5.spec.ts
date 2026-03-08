import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_disabledentrepreneur.uk_hn5', ['https://disabledentrepreneur.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
