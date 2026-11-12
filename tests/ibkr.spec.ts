import generateCMPTests from '../playwright/runner';

// saving consent reloads the page, so the self-test runs before the cookie is set
const options = { testSelfTest: false };

generateCMPTests('ibkr', ['https://ibtweet.com/', 'https://clientam.co.uk/', 'https://interactivevp.com/'], options);

// EEA visitors get a region selection dialog before the cookie modal
generateCMPTests('ibkr', ['https://www.interactivebrokers.com/'], {
    ...options,
    onlyRegions: ['US'],
});

// variant with a "Reject All Cookies" button
generateCMPTests('ibkr', ['https://www.interactivebrokers.ie/'], {
    ...options,
    onlyRegions: ['DE'],
});
