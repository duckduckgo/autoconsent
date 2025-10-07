import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chipsaway.co.uk_xsc', ['https://www.chipsaway.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
