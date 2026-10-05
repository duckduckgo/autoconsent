import generateCMPTests from '../playwright/runner';

generateCMPTests('jpmorgan-chase', [
    'https://www.chase.com/personal/events/experiences',
    'https://www.chase.com/business',
    'https://www.jpmorgan.com/',
    'https://www.jpmorganchase.com/',
]);
