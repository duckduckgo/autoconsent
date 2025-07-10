import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_elementgames.co.uk_2ua', ['https://elementgames.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
