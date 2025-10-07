import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_musiciansunion.org.uk_0', ['https://musiciansunion.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
