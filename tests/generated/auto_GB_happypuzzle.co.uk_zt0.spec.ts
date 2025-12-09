import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_happypuzzle.co.uk_zt0', ['https://www.happypuzzle.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
