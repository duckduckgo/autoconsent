import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mobilephonesdirect.co.uk_bok', ['https://www.mobilephonesdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
