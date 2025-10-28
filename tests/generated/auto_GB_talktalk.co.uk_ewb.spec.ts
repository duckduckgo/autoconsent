import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_talktalk.co.uk_ewb', ['https://www.talktalk.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
