require('dotenv').config();

const doit = {};

doit.companyName = 'DoiT';
doit.companyNameFull = doit.companyName + ' International';
doit.companyNameAbbrev = doit.companyName + ' Intl.';
doit.siteName = 'Help Center';
doit.siteTitle = doit.companyName + ' Help Center';
doit.siteTitleFull = doit.companyNameFull + ' Help Center';
doit.siteTitleAbbrev = doit.companyNameAbbrev + ' Help Center';
doit.tagLine = 'How can we help?';
doit.defaultDesc = 'User guides, how-tos, FAQs, and more';
doit.domain = 'doit-intl.com';
doit.homeUrl = 'https://' + doit.domain + '/';
doit.statsUrl = doit.homeUrl + 'stats/';
doit.servicesUrl = doit.homeUrl + 'services/';
doit.complianceUrl = doit.homeUrl + 'compliance/';
doit.blogUrl = 'https://blog.' + doit.domain + '/';
doit.appUrl = 'https://app.' + doit.domain + '/';
doit.supportUrl = doit.appUrl + 'support';
doit.developerUrl = 'https://developer.' + doit.domain + '/';
doit.feedbackUrl = 'https://feedback.' + doit.domain + '/';
doit.helpUrl = process.env.URL || 'http://localhost:3000';
doit.helpDomain = doit.helpUrl.split('//')[1];
doit.ghOrg = 'doitintl';
doit.ghOrgUrl = 'https://github.com/' + doit.ghOrg;
doit.ghProject = 'help';
doit.ghProjectUrl = doit.ghOrgUrl + '/' + doit.ghProject;
doit.ghEditUrl = doit.ghProjectUrl + '/tree/main/website';
doit.linkedInUrl = 'https://www.linkedin.com/company/doitintl';
doit.youTubeUrl = 'https://www.youtube.com/c/MultiCloudEngineering';
// cspell:disable-next-line
doit.twitterUsername = 'doitint';
doit.twitterUrl = 'https://twitter.com/' + doit.twitterUsername;
doit.facebookUrl = 'https://www.facebook.com/DoIT.International';

module.exports = doit;
