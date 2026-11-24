import generateCMPTests from '../playwright/runner';

generateCMPTests('anowave-gtm', [
    'https://www.military1st.co.uk/',
    'https://www.firstcarecompany.nl/',
    'https://www.lilou.pl/',
    'https://www.theradiatorcompany.co.uk/',
]);
