import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.store.tapo.com_3bt', ['https://uk.store.tapo.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
