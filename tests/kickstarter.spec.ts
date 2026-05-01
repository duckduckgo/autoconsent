import generateCMPTests from '../playwright/runner';

generateCMPTests('kickstarter.com', [
    'https://www.kickstarter.com/projects/simonegiertz/laundry-chair-the-bedroom-chair-you-have-always-wanted',
    'https://www.kickstarter.com/',
]);
