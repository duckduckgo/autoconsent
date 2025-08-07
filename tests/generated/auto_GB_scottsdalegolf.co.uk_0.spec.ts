import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scottsdalegolf.co.uk_0', ['https://www.scottsdalegolf.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
