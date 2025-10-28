import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_philipmorrisdirect.co.uk_cm0', ['https://www.philipmorrisdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
