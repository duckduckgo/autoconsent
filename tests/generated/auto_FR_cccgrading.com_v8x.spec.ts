import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cccgrading.com_v8x', ['https://cccgrading.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
