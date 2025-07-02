import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_europcar.co.uk_0', ['https://www.europcar.co.uk/en-gb'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
