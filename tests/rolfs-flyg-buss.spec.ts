import generateCMPTests from '../playwright/runner';

generateCMPTests('rolfs-flyg-buss', ['https://www.rolfsbuss.se/', 'https://www.solresor.se/', 'https://www.rolfstours.com/'], {
    hideWebdriver: true,
});
