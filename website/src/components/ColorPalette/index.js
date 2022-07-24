import React from 'react';
import styles from './styles.module.css';
import SwatchIcon from './swatch.svg';

// Canvases and their colors

const doitBackgroundColors = [
  '--doit-color-background-default',
  '--doit-color-background-dark',
]

const colorPalettes = {
  'doit-brand': [
    ['--doit-color-ink', doitBackgroundColors],
    ['--doit-color-spark', doitBackgroundColors],
    ['--doit-color-violet', doitBackgroundColors],
    ['--doit-color-teal', doitBackgroundColors],
    ['--doit-neutral-lighter', doitBackgroundColors],
    ['--doit-neutral-light', doitBackgroundColors],
    ['--doit-neutral-midtone', doitBackgroundColors],
    ['--doit-neutral-dark', doitBackgroundColors],
    ['--doit-neutral-darker', doitBackgroundColors],
  ],
  'doit-ground': [
    ['--doit-color-foreground', doitBackgroundColors],
    ['--doit-color-background', doitBackgroundColors],
    ['--doit-color-background-dark', doitBackgroundColors],
    ['--doit-color-background-inverse', doitBackgroundColors],
    ['--doit-color-background-dark-inverse', doitBackgroundColors],
    ['--doit-color-backdrop', doitBackgroundColors],
    ['--doit-color-divider', doitBackgroundColors],
    ['--doit-color-outline-border', doitBackgroundColors],
  ],
  'doit-text': [
    ['--doit-color-text-primary', doitBackgroundColors],
    ['--doit-color-text-primary-contrast', doitBackgroundColors],
    ['--doit-color-text-secondary', doitBackgroundColors],
    ['--doit-color-text-disabled', doitBackgroundColors],
  ],
  'doit-actions': [
    ['--doit-color-actions-active', doitBackgroundColors],
    ['--doit-color-actions-hover', doitBackgroundColors],
    ['--doit-color-actions-selected', doitBackgroundColors],
    ['--doit-color-actions-disabled', doitBackgroundColors],
    ['--doit-color-actions-disabled-background', doitBackgroundColors],
    ['--doit-color-actions-focus', doitBackgroundColors],
  ],
  'doit-primary': [
    ['--doit-color-primary-main', doitBackgroundColors],
    ['--doit-color-primary-light', doitBackgroundColors],
    ['--doit-color-primary-dark', doitBackgroundColors],
    ['--doit-color-primary-contrast-text', doitBackgroundColors],
    ['--doit-color-primary-background', doitBackgroundColors],
    ['--doit-color-primary-background-hover', doitBackgroundColors],
    ['--doit-color-primary-border', doitBackgroundColors],
  ],
  'doit-navigation': [
    ['--doit-color-navigation-background', doitBackgroundColors],
    ['--doit-color-navigation-text', doitBackgroundColors],
    ['--doit-color-navigation-search-background', doitBackgroundColors],
    ['--doit-color-navigation-search-placeholder', doitBackgroundColors],
    ['--doit-color-navigation-divider', doitBackgroundColors],
    ['--doit-color-navigation-gradient', doitBackgroundColors],
    ['--doit-color-navigation-accent', doitBackgroundColors],
  ],
  'doit-success': [
    ['--doit-color-success-main', doitBackgroundColors],
    ['--doit-color-success-light', doitBackgroundColors],
    ['--doit-color-success-dark', doitBackgroundColors],
    ['--doit-color-success-contrast-text', doitBackgroundColors],
    ['--doit-color-success-content', doitBackgroundColors],
    ['--doit-color-success-background', doitBackgroundColors],
    ['--doit-color-success-background-hover', doitBackgroundColors],
    ['--doit-color-success-border', doitBackgroundColors],
  ],
  'doit-info': [
    ['--doit-color-info-main', doitBackgroundColors],
    ['--doit-color-info-light', doitBackgroundColors],
    ['--doit-color-info-dark', doitBackgroundColors],
    ['--doit-color-info-contrast-text', doitBackgroundColors],
    ['--doit-color-info-content', doitBackgroundColors],
    ['--doit-color-info-background', doitBackgroundColors],
    ['--doit-color-info-background-hover', doitBackgroundColors],
    ['--doit-color-info-border', doitBackgroundColors],
  ],
  'doit-warning': [
    ['--doit-color-warning-main', doitBackgroundColors],
    ['--doit-color-warning-light', doitBackgroundColors],
    ['--doit-color-warning-dark', doitBackgroundColors],
    ['--doit-color-warning-contrast-text', doitBackgroundColors],
    ['--doit-color-warning-content', doitBackgroundColors],
    ['--doit-color-warning-background', doitBackgroundColors],
    ['--doit-color-warning-background-hover', doitBackgroundColors],
    ['--doit-color-warning-border', doitBackgroundColors],
  ],
  'doit-error': [
    ['--doit-color-error-main', doitBackgroundColors],
    ['--doit-color-error-light', doitBackgroundColors],
    ['--doit-color-error-dark', doitBackgroundColors],
    ['--doit-color-error-contrast-text', doitBackgroundColors],
    ['--doit-color-error-content', doitBackgroundColors],
    ['--doit-color-error-background', doitBackgroundColors],
    ['--doit-color-error-background-hover', doitBackgroundColors],
    ['--doit-color-error-border', doitBackgroundColors],
  ],
  'infirma-secondary': [
    ['--ifm-color-secondary-lightest'],
    ['--ifm-color-secondary-lighter'],
    ['--ifm-color-secondary-light'],
    ['--ifm-color-secondary'],
    ['--ifm-color-secondary-dark'],
    ['--ifm-color-secondary-darker'],
    ['--ifm-color-secondary-darkest'],
    ['--ifm-color-secondary-contrast-background'],
    ['--ifm-color-secondary-contrast-foreground'],
  ],
  'infirma-success': [
    ['--ifm-color-success-lightest'],
    ['--ifm-color-success-lighter'],
    ['--ifm-color-success-light'],
    ['--ifm-color-success'],
    ['--ifm-color-success-dark'],
    ['--ifm-color-success-darker'],
    ['--ifm-color-success-darkest'],
    ['--ifm-color-success-contrast-background'],
    ['--ifm-color-success-contrast-foreground'],
  ],
  'infirma-info': [
    ['--ifm-color-info-lightest'],
    ['--ifm-color-info-lighter'],
    ['--ifm-color-info-light'],
    ['--ifm-color-info'],
    ['--ifm-color-info-dark'],
    ['--ifm-color-info-darker'],
    ['--ifm-color-info-darkest'],
    ['--ifm-color-info-contrast-background'],
    ['--ifm-color-info-contrast-foreground'],
  ],
  'infirma-primary': [
    ['--ifm-color-primary-lightest'],
    ['--ifm-color-primary-lighter'],
    ['--ifm-color-primary-light'],
    ['--ifm-color-primary'],
    ['--ifm-color-primary-dark'],
    ['--ifm-color-primary-darker'],
    ['--ifm-color-primary-darkest'],
    ['--ifm-color-primary-contrast-background'],
    ['--ifm-color-primary-contrast-foreground'],
  ],
  'infirma-warning': [
    ['--ifm-color-warning-lightest'],
    ['--ifm-color-warning-lighter'],
    ['--ifm-color-warning-light'],
    ['--ifm-color-warning'],
    ['--ifm-color-warning-dark'],
    ['--ifm-color-warning-darker'],
    ['--ifm-color-warning-darkest'],
    ['--ifm-color-warning-contrast-background'],
    ['--ifm-color-warning-contrast-foreground'],
  ],
  'infirma-danger': [
    ['--ifm-color-danger-lightest'],
    ['--ifm-color-danger-lighter'],
    ['--ifm-color-danger-light'],
    ['--ifm-color-danger'],
    ['--ifm-color-danger-dark'],
    ['--ifm-color-danger-darker'],
    ['--ifm-color-danger-darkest'],
    ['--ifm-color-danger-contrast-background'],
    ['--ifm-color-danger-contrast-foreground'],
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
        {colorPalettes[paletteName].forEach(function (palette) {
          var foregroundColor = palette[0];
          var backgroundColors = palette[1];
          console.log(foregroundColor);
          return (
            <tr>
              <td className={`${styles.color_name}`}>
                <code>{foregroundColor}</code>
              </td>
              <td className='canvas_checkerboard'>
                <div
                  title={foregroundColor}
                  style={{ background: `var(` + foregroundColor + `)` }} >
                </div>
              </td>
              {backgroundColors.map((backgroundColor) => (
                <td
                  title={backgroundColor}
                  className={`${styles.swatch}`}
                  style={{ background: `var(` + backgroundColor + `)` }}>
                  <div
                    title={foregroundColor}
                    style={{ background: `var(` + backgroundColor + `)` }} />
                </td>
              ))}
            </tr>
          )
        })}
      </table>
    </div >
  );
}
