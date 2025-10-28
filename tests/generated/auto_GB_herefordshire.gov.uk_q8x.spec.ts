import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_herefordshire.gov.uk_q8x', ['https://www.herefordshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
