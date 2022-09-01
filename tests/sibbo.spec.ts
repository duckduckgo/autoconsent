import generateCMPTests from "../playwright/runner";

generateCMPTests('sibbo', [
    'https://www.europafm.com/',
    'https://sibboventures.com/',
    'https://www.cmmedia.es/',
    'https://www.todopapas.com/',
    'https://www.parador.es/'
]
);
