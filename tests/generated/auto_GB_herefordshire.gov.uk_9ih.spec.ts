import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_herefordshire.gov.uk_9ih', ['https://www.herefordshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
