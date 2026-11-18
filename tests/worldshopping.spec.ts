import generateCMPTests from '../playwright/runner';

// The WorldShopping cookie banner is only shown on mobile, and not to visitors from these regions
generateCMPTests('worldshopping', ['https://suzuri.jp/', 'https://rinkan-online.com/', 'https://www.idee-online.com/'], {
    mobile: true,
    skipRegions: ['US', 'AU', 'JP'],
});
