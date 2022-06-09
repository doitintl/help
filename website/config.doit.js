require('dotenv').config();

const doitConfig = {};

doitConfig.companyName = 'DoiT';
doitConfig.companyNameFull = doitConfig.companyName + ' International';
doitConfig.companyNameAbbrev = doitConfig.companyName + ' Intl.';
doitConfig.siteName = 'Help Center';
doitConfig.siteTitle = doitConfig.companyName + ' Help Center';
doitConfig.siteTitleFull = doitConfig.companyNameFull + ' Help Center';
doitConfig.siteTitleAbbrev = doitConfig.companyNameAbbrev + ' Help Center';
doitConfig.tagLine = 'How can we help?';
doitConfig.defaultDesc = 'User guides, how-tos, FAQs, and more';
doitConfig.domain = 'doit-intl.com';
doitConfig.homeUrl = 'https://' + doitConfig.domain + '/';
doitConfig.statsUrl = doitConfig.homeUrl + 'stats/';
doitConfig.servicesUrl = doitConfig.homeUrl + 'services/';
doitConfig.complianceUrl = doitConfig.homeUrl + 'compliance/';
doitConfig.blogUrl = 'https://blog.' + doitConfig.domain + '/';
doitConfig.appUrl = 'https://app.' + doitConfig.domain + '/';
doitConfig.supportUrl = doitConfig.appUrl + 'support';
doitConfig.developerUrl = 'https://developer.' + doitConfig.domain + '/';
doitConfig.feedbackUrl = 'https://feedback.' + doitConfig.domain + '/';
doitConfig.helpUrl = process.env.URL || 'http://localhost:3000';
doitConfig.helpDomain = doitConfig.helpUrl.split('//')[1];
doitConfig.ghOrg = 'doitintl';
doitConfig.ghOrgUrl = 'https://github.com/' + doitConfig.ghOrg;
doitConfig.ghProject = 'help';
doitConfig.ghProjectUrl = doitConfig.ghOrgUrl + '/' + doitConfig.ghProject;
doitConfig.ghEditUrl = doitConfig.ghProjectUrl + '/tree/main/website/docs';
doitConfig.linkedInUrl = 'https://www.linkedin.com/company/doitintl';
doitConfig.youTubeUrl = 'https://www.youtube.com/c/MultiCloudEngineering';
// cspell:disable-next-line
doitConfig.twitterUsername = 'doitint';
doitConfig.twitterUrl = 'https://twitter.com/' + doitConfig.twitterUsername;
doitConfig.facebookUrl = 'https://www.facebook.com/DoIT.International';

module.exports = doitConfig;
