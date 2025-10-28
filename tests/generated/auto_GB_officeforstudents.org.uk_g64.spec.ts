import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_officeforstudents.org.uk_g64', ['https://www.officeforstudents.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
