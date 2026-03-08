import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_energylightbulbs.co.uk_gs0', ['https://energylightbulbs.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
