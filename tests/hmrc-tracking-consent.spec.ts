import generateCMPTests from '../playwright/runner';

generateCMPTests('hmrc-tracking-consent', [
    'https://www.tax.service.gov.uk/guidance/apply-to-pay-ni-contributions-abroad/start/about-this-form',
    'https://www.tax.service.gov.uk/estimate-paye-take-home-pay/your-pay',
    'https://www.tax.service.gov.uk/ask-hmrc/chat/self-assessment',
]);
