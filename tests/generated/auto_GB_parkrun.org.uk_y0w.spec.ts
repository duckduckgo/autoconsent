import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parkrun.org.uk_y0w', ['https://www.parkrun.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
