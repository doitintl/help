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
    '--doit-color-primary',
    '--doit-color-primary-light',
    '--doit-color-primary-dark',
    '--doit-color-primary-hover-background',
    '--doit-color-primary-border',
    '--doit-color-primary-contrast-text',
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
