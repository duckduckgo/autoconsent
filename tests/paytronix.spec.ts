import generateCMPTests from '../playwright/runner';

generateCMPTests('paytronix', [
    'https://andyspizza.myguestaccount.com/en-us/guest/',
    'https://40north.myguestaccount.com/en-us/guest/',
    'https://agape.myguestaccount.com/en-us/guest/',
]);
