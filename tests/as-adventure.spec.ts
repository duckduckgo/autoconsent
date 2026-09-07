import generateCMPTests from '../playwright/runner';

generateCMPTests('as-adventure', [
    'https://www.bever.nl/',
    'https://www.juttu.be/nl.html',
    'https://www.asadventure.com/nl.html',
    'https://www.cotswoldoutdoor.com/',
    'https://www.snowandrock.com/',
    'https://www.runnersneed.com/',
]);
