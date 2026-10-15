import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-consent-reject-btn', ['https://www.aoeah.com/', 'https://www.mtmmo.com/'], {
    skipRegions: ['GB'],
});

generateCMPTests('cookie-consent-reject-btn', ['https://exclusivecottonhouse.com/']);
