import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishmuseumshoponline.org_68f', ['https://www.britishmuseumshoponline.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
