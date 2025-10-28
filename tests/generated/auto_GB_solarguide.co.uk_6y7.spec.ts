import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_solarguide.co.uk_6y7', ['https://www.solarguide.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
