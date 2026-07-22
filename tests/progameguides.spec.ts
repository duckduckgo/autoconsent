import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'progameguides.com',
    ['https://progameguides.com/roblox/how-to-get-the-cornbread-marker-in-find-the-markers-roblox/'],
    {
        mobile: true,
        testOptIn: false,
    },
);
