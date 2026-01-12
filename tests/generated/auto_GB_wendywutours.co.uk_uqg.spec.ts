import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wendywutours.co.uk_uqg', ['https://www.wendywutours.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
