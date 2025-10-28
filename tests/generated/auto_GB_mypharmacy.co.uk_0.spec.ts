import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mypharmacy.co.uk_0', ['https://www.mypharmacy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
