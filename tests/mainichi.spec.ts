import generateCMPTests from '../playwright/runner';

generateCMPTests('mainichi', ['https://mainichi.jp/'], {
    onlyRegions: ['JP', 'US'],
});

generateCMPTests('mainichi', ['https://mainichi.jp/'], {
    onlyRegions: ['JP', 'US'],
    mobile: true,
});
