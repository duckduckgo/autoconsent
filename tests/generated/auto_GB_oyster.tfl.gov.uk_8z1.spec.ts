import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oyster.tfl.gov.uk_8z1', ['https://oyster.tfl.gov.uk/oyster/entry.do'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
