import generateCMPTests from '../playwright/runner';

// US-channel page: the mol-ads-cmp notice is shown for US traffic (see REGION in Playwright config).
generateCMPTests('dmgmedia-us', ['https://www.dailymail.co.uk/ushome/index.html'], {
    onlyRegions: ['US'],
});

generateCMPTests('dmgmedia-us', ['https://www.dailymail.co.uk/ushome/index.html'], {
    onlyRegions: ['US'],
    mobile: true,
});
