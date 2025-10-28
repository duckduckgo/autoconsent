import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_manchestertheatres.com_xpo', ['https://www.manchestertheatres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
