import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westwitteringestate.co.uk_hs0', ['https://www.westwitteringestate.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
