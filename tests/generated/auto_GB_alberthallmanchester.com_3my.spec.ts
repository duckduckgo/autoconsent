import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alberthallmanchester.com_3my', ['https://alberthallmanchester.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
