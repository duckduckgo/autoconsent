import generateCMPTests from '../playwright/runner';

// DoorDash only serves the banner in some markets; Canada is the one covered by the test regions.
generateCMPTests('doordash-storefront', ['https://order.online/store/25309440', 'https://earlsca.order.online/store/-98335/'], {
    onlyRegions: ['CA'],
});
