import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jdsports.co.uk_626', ['https://www.jdsports.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
