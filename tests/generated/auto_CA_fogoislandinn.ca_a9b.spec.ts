import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fogoislandinn.ca_a9b', ['https://fogoislandinn.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
