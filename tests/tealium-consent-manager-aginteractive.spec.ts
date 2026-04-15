import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tealium-consent-manager-aginteractive',
    ['https://www.americangreetings.com/', 'https://www.bluemountain.com/', 'https://www.jacquielawson.com/'],
    { skipRegions: ['US'] },
);
