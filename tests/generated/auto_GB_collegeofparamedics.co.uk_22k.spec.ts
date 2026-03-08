import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_collegeofparamedics.co.uk_22k', ['https://collegeofparamedics.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
