import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import styles from './styles.module.css';

// Material icons
// https://mui.com/material-ui/icons/

import DangerousIcon from '@mui/icons-material/Dangerous';
import WarningIcon from '@mui/icons-material/Warning';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReportIcon from '@mui/icons-material/Report';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';

// These admonitions types are compatible with the admonitions supported by
// ReStructuredText and Docutils (except for the removal of ERROR and the
// addition of SEEALSO)
// https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

// Admonition styles were inspired by the admonitions in use by the
// Read the Docs Sphinx Theme
// https://sphinx-rtd-theme.readthedocs.io/en/stable/demo/demo.html

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
  danger: {
    infimaClassName: 'danger',
    iconComponent: DangerousIcon,
    label: 'Danger',
  },
  warning: {
    infimaClassName: 'danger',
    iconComponent: ReportIcon,
    label: 'Warning',
  },
  caution: {
    infimaClassName: 'warning',
    iconComponent: WarningIcon,
    label: 'Caution',
  },
  attention: {
    infimaClassName: 'warning',
    iconComponent: WarningAmberIcon,
    label: 'Attention',
  },
  hint: {
    infimaClassName: 'success',
    iconComponent: ManageSearchIcon,
    label: 'Hint',
  },
  tip: {
    infimaClassName: 'success',
    iconComponent: LightbulbOutlinedIcon,
    label: 'Tip',
  },
  important: {
    infimaClassName: 'info',
    iconComponent: ErrorOutlineOutlinedIcon,
    label: 'Important',
  },
  note: {
    infimaClassName: 'secondary',
    iconComponent: StickyNote2OutlinedIcon,
    label: 'Note',
  },
  seealso: {
    infimaClassName: 'secondary',
    iconComponent: SignpostOutlinedIcon,
    label: 'See also',
  },
};

function getAdmonitionConfig(type) {
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(
    `No admonition config found for admonition type "${type}". ` +
      `Using Note as fallback.`,
  );
  return AdmonitionConfigs.note;
}

// Lines below here left unmodified (after swizzling)

// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) =>
      React.isValidElement(item) &&
      item.props?.mdxType === 'mdxAdmonitionTitle',
  );
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}
function processAdmonitionProps(props) {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(
    props.children,
  );
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}
export default function Admonition(props) {
  const {
    children,
    type,
    title,
    icon: iconProp,
  } = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  const { iconComponent: IconComponent } = typeConfig;
  const icon = iconProp ?? <IconComponent />;
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(props.type),
        'alert',
        `alert--${typeConfig.infimaClassName}`,
        styles.admonition,
      )}>
      <div className={styles.admonitionHeading}>
        <span className={styles.admonitionIcon}>{icon}</span>
        {titleLabel}
      </div>
      <div className={styles.admonitionContent}>{children}</div>
    </div>
  );
}
