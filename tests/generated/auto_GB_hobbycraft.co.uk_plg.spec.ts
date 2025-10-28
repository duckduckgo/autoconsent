import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hobbycraft.co.uk_plg', ['https://www.hobbycraft.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
