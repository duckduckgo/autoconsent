import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.talktalk.co.uk_2d6', ['https://community.talktalk.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
