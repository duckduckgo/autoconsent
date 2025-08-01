import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_airchina.co.uk_xii', ['https://www.airchina.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
