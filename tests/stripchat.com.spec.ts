import generateCMPTests from '../playwright/runner';

// Other regions put an 18+ gate in front of the banner, which the test runner cannot pass
generateCMPTests('stripchat.com', ['https://xhamsterlive.com/', 'https://stripchat.com/', 'https://superchat.live/'], {
    onlyRegions: ['GB'],
});
