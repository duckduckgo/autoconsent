import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hd.kinopoisk.ru_r1u', ['https://hd.kinopoisk.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
