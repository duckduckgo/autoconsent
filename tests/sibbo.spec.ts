import generateCMPTests from "../playwright/runner";

generateCMPTests('sibbo', [
    'https://www.europafm.com/',
    'https://sibboventures.com/',
    'https://www.todopapas.com/',
    'https://www.estadiodeportivo.com/'
]
);
