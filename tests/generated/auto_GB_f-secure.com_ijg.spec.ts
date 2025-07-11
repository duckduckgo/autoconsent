import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_f-secure.com_ijg', ['https://www.f-secure.com/gb-en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
