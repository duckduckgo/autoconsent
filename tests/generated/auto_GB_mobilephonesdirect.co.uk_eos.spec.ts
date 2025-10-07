import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mobilephonesdirect.co.uk_eos', ['https://www.mobilephonesdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
