import generateCMPTests from '../playwright/runner';

// the consent banner is only shown in regions WorldShopping treats as opt-in (EEA, UK, ...)
generateCMPTests('worldshopping', ['https://suzuri.jp/', 'https://whatzis.jp/', 'https://kyoanishop.com/'], {
    onlyRegions: ['DE', 'GB', 'FR', 'NL'],
});
