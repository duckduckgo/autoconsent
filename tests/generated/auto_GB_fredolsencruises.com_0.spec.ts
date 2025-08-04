import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fredolsencruises.com_0', ['https://www.fredolsencruises.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
