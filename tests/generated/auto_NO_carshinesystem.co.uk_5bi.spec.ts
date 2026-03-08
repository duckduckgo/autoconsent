import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_carshinesystem.co.uk_5bi', ['https://carshinesystem.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
