import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_penheaven.co.uk_pxt', ['https://www.penheaven.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
