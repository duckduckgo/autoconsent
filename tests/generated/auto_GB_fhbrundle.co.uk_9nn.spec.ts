import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fhbrundle.co.uk_9nn', ['https://www.fhbrundle.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
