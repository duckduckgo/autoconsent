import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationalplastics.co.uk_emh', ['https://www.nationalplastics.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
