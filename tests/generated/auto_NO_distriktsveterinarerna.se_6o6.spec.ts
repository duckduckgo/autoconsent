import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_distriktsveterinarerna.se_6o6', ['https://distriktsveterinarerna.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
