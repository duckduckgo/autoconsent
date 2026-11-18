import generateCMPTests from '../playwright/runner';

// The cookie banner is only shown to mobile visitors from the UK/EEA (and some other regions)
generateCMPTests('worldshopping', ['https://suzuri.jp/', 'https://hotarunohikari.jp/', 'https://tkj.jp/', 'https://fafa-online.jp/'], {
    mobile: true,
    onlyRegions: ['GB', 'DE', 'FR'],
});
