import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_free-work.com_y9h', ['https://www.free-work.com/en-gb/tech-it'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
