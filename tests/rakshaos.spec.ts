import generateCMPTests from '../playwright/runner';

generateCMPTests('rakshaos', [
    'https://store.waitbutwhy.com/',
    'https://mightybright.com/',
    'https://madeinstroud.co.uk/',
    // no decline button on the banner
    'https://taschendeal.de/',
]);
