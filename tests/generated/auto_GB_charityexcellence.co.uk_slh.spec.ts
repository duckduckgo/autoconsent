import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_charityexcellence.co.uk_slh', ['https://www.charityexcellence.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
