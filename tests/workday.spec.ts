import generateCMPTests from '../playwright/runner';

generateCMPTests('workday', [
    'https://oreillyauto.wd1.myworkdayjobs.com/oreilly/job/Store-02642-Phoenix-AZ/Delivery-Specialist_R124502/apply',
    'https://sanofi.wd3.myworkdayjobs.com/SanofiCareers',
    'https://salesforce.wd12.myworkdayjobs.com/External_Career_Site',
    // Workday also serves career sites from myworkdaysite.com, so the rule must not be host-scoped.
    'https://wd3.myworkdaysite.com/recruiting/havas/HealthYouExternalCareerSite',
]);
