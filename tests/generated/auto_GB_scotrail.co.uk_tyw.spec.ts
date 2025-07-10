import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scotrail.co.uk_tyw', ['https://www.scotrail.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
