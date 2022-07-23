import React from 'react';
import styles from './styles.module.css';
import SwatchIcon from './swatch.svg';

// Canvases and their colors
const canvasColors = [
  {
    className: 'canvas_checkerboard',
    colorName: '',
  },
  {
    className: 'canvas_background_default',
    colorName: '--doit-color-background-default',
  },
  {
    className: 'canvas_background_dark',
    colorName: '--doit-color-background-dark',
  },
  {
    className: 'canvas_success_background',
    colorName: '--doit-color-success-background',
  },
  {
    className: 'canvas_info_background',
    colorName: '--doit-color-info-background',
  },
  {
    className: 'canvas_warning_background',
    colorName: '--doit-color-warning-background',
  },
  {
    className: 'canvas_error_background',
    colorName: '--doit-color-error-background',
  },
  {
    className: 'canvas_primary',
    colorName: '--doit-color-primary',
  },
  {
    className: 'canvas_success_main',
    colorName: '--doit-color-success-main',
  },
  {
    className: 'canvas_info_main',
    colorName: '--doit-color-info-main',
  },
  {
    className: 'canvas_warning_main',
    colorName: '--doit-color-warning-main',
  },
  {
    className: 'canvas_error_main',
    colorName: '--doit-color-error-main',
  },
  {
    className: 'canvas_backdrop',
    colorName: '--doit-color-backdrop',
  },
  {
    className: 'canvas_navigation_background',
    colorName: '--doit-color-navigation-background',
  },
  {
    className: 'canvas_background_default_inverse',
    colorName: '--doit-color-background-default-inverse',
  },
  {
    className: 'canvas_background_dark_inverse',
    colorName: '--doit-color-background-dark-inverse',
  },
];

const colorPalettes = {
  'doit-brand': [
    '--doit-color-ink',
    '--doit-color-spark',
    '--doit-color-spark-desaturated',
    '--doit-color-violet',
    '--doit-color-teal',
    '--doit-neutral-lighter',
    '--doit-neutral-light',
    '--doit-neutral-midtone',
    '--doit-neutral-dark',
    '--doit-neutral-darker',
  ],
  'doit-ground': [
    '--doit-color-foreground',
    '--doit-color-background',
    '--doit-color-background-dark',
    '--doit-color-background-inverse',
    '--doit-color-background-dark-inverse',
    '--doit-color-backdrop',
    '--doit-color-divider',
    '--doit-color-outline-border',
  ],
  'doit-text': [
    '--doit-color-text-primary',
    '--doit-color-text-primary-contrast',
    '--doit-color-text-secondary',
    '--doit-color-text-disabled',
  ],
  'doit-actions': [
    '--doit-color-actions-active',
    '--doit-color-actions-hover',
    '--doit-color-actions-selected',
    '--doit-color-actions-disabled',
    '--doit-color-actions-disabled-background',
    '--doit-color-actions-focus',
  ],
  'doit-primary': [
    '--doit-color-primary-main',
    '--doit-color-primary-light',
    '--doit-color-primary-dark',
    '--doit-color-primary-contrast-text',
    '--doit-color-primary-content',
    '--doit-color-primary-background',
    '--doit-color-primary-hover-background',
    '--doit-color-primary-border',
  ],
  'doit-navigation': [
    '--doit-color-navigation-background',
    '--doit-color-navigation-text',
    '--doit-color-navigation-search-background',
    '--doit-color-navigation-search-placeholder',
    '--doit-color-navigation-divider',
    '--doit-color-navigation-gradient',
    '--doit-color-navigation-accent',
  ],
  'doit-success': [
    '--doit-color-success-main',
    '--doit-color-success-light',
    '--doit-color-success-dark',
    '--doit-color-success-contrast-text',
    '--doit-color-success-content',
    '--doit-color-success-background',
    '--doit-color-success-hover-background',
    '--doit-color-success-border',
  ],
  'doit-info': [
    '--doit-color-info-main',
    '--doit-color-info-light',
    '--doit-color-info-dark',
    '--doit-color-info-contrast-text',
    '--doit-color-info-content',
    '--doit-color-info-background',
    '--doit-color-info-hover-background',
    '--doit-color-info-border',
  ],
  'doit-warning': [
    '--doit-color-warning-main',
    '--doit-color-warning-light',
    '--doit-color-warning-dark',
    '--doit-color-warning-contrast-text',
    '--doit-color-warning-content',
    '--doit-color-warning-background',
    '--doit-color-warning-hover-background',
    '--doit-color-warning-border',
  ],
  'doit-error': [
    '--doit-color-error-main',
    '--doit-color-error-light',
    '--doit-color-error-dark',
    '--doit-color-error-contrast-text',
    '--doit-color-error-content',
    '--doit-color-error-background',
    '--doit-color-error-hover-background',
    '--doit-color-error-border',
  ],
  'infirma-secondary': [
    '--ifm-color-secondary-lightest',
    '--ifm-color-secondary-lighter',
    '--ifm-color-secondary-light',
    '--ifm-color-secondary',
    '--ifm-color-secondary-dark',
    '--ifm-color-secondary-darker',
    '--ifm-color-secondary-darkest',
    '--ifm-color-secondary-contrast-background',
    '--ifm-color-secondary-contrast-foreground',
  ],
  'infirma-success': [
    '--ifm-color-success-lightest',
    '--ifm-color-success-lighter',
    '--ifm-color-success-light',
    '--ifm-color-success',
    '--ifm-color-success-dark',
    '--ifm-color-success-darker',
    '--ifm-color-success-darkest',
    '--ifm-color-success-contrast-background',
    '--ifm-color-success-contrast-foreground',
  ],
  'infirma-info': [
    '--ifm-color-info-lightest',
    '--ifm-color-info-lighter',
    '--ifm-color-info-light',
    '--ifm-color-info',
    '--ifm-color-info-dark',
    '--ifm-color-info-darker',
    '--ifm-color-info-darkest',
    '--ifm-color-info-contrast-background',
    '--ifm-color-info-contrast-foreground',
  ],
  'infirma-primary': [
    '--ifm-color-primary-lightest',
    '--ifm-color-primary-lighter',
    '--ifm-color-primary-light',
    '--ifm-color-primary',
    '--ifm-color-primary-dark',
    '--ifm-color-primary-darker',
    '--ifm-color-primary-darkest',
    '--ifm-color-primary-contrast-background',
    '--ifm-color-primary-contrast-foreground',
  ],
  'infirma-warning': [
    '--ifm-color-warning-lightest',
    '--ifm-color-warning-lighter',
    '--ifm-color-warning-light',
    '--ifm-color-warning',
    '--ifm-color-warning-dark',
    '--ifm-color-warning-darker',
    '--ifm-color-warning-darkest',
    '--ifm-color-warning-contrast-background',
    '--ifm-color-warning-contrast-foreground',
  ],
  'infirma-danger': [
    '--ifm-color-danger-lightest',
    '--ifm-color-danger-lighter',
    '--ifm-color-danger-light',
    '--ifm-color-danger',
    '--ifm-color-danger-dark',
    '--ifm-color-danger-darker',
    '--ifm-color-danger-darkest',
    '--ifm-color-danger-contrast-background',
    '--ifm-color-danger-contrast-foreground',
  ]
};

export default function ColorPalette(props) {
  const { paletteName } = props;

  if (paletteName === undefined) {
    throw new Error('ColorPalette: paletteName is required');
  }

  return (
    <div className={`${styles.color_palette}`}>
      <table>
        {colorPalettes[paletteName].map((colorName) => (
          <tr>
            <td className={`${styles.color_name}`}>
              <code>{colorName}</code>
            </td>
            {canvasColors.map((canvas) => (
              <td
                className={`${styles.swatch} ${styles[canvas.className]} `}
                title={canvas.colorName}>
                <div style={{ background: `var(` + colorName + `)` }} />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
