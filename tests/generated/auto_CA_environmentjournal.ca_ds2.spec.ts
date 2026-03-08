import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_environmentjournal.ca_ds2', ['https://environmentjournal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
