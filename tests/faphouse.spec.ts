import generateCMPTests from '../playwright/runner';

generateCMPTests('faphouse', ['https://fhway.live/', 'https://faphouse.com/', 'https://faphouse1.com/', 'https://fhaccess.com/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
