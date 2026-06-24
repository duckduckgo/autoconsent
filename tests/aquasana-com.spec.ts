import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'aquasana.com',
    [
        'https://www.martinguitar.com/',
        'https://emea.mizuno.com/eu/it-it/how-to-start-running-for-beginners.html',
    ],
    {},
);
