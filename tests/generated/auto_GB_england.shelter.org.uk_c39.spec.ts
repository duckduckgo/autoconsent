import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_england.shelter.org.uk_c39', ['https://england.shelter.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
