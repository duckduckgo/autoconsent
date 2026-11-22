import generateCMPTests from '../playwright/runner';

generateCMPTests('civic-govuk-cookiecontrol', [
    'https://www.cumberland.gov.uk/',
    'https://www.pensions-ombudsman.org.uk/',
    'https://www.spso.org.uk/',
    'https://www.dumfriesandgalloway.gov.uk/',
    'https://www.barrowbc.gov.uk/',
]);
