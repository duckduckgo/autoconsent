import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nexusmods.com_9pl', ['https://www.nexusmods.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
