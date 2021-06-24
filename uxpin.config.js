/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/FormaTypography/FormaTypography.jsx',
          'src/components/FormaDisplayText/FormaDisplayText.jsx',
          'src/components/FormaHeading/FormaHeading.jsx',
          'src/components/FormaSectionHeading/FormaSectionHeading.jsx',
          'src/components/FormaSubheading/FormaSubheading.jsx',
          'src/components/FormaParagraph/FormaParagraph.jsx',
          'src/components/FormaAsset/FormaAsset.jsx',
          'src/components/FormaButton/FormaButton.jsx',
          'src/components/FormaCheckbox/FormaCheckbox.jsx',
          'src/components/FormaCopyButton/FormaCopyButton.jsx',
          'src/components/FormaDropdown/FormaDropdown.jsx',
          'src/components/FormaDropdownList/FormaDropdownlist.jsx',
          'src/components/FormaDropdownListItem/FormaDropDownListItem.jsx',
          'src/components/FormaEntityListItem/FormaEntityListItem.jsx',
          'src/components/FormaIcons/FormaIcons.jsx',
          'src/components/FormaIllustration/FormaIllustration.jsx',
          'src/components/FormaPill/FormaPill.jsx',
          'src/components/FormaRadioButton/FormaRadioButton.jsx',
          'src/components/FormaSpinner/FormaSpinner.jsx',
          'src/components/FormaSwitch/FormaSwitch.jsx',
          'src/components/FormaTabs/FormaTabs.jsx',
          'src/components/FormaTab/FormaTab.jsx',
          'src/components/FormaTextLink/FormaTextLink.jsx',
          'src/components/FormaTooltip/FormaTooltip.jsx',
          'src/components/FormaValidationMessage/FormaValidationMessage.jsx',
          'src/components/Workbench/Workbench.jsx',
          'src/components/WorkbenchHeader/WorkbenchHeader.jsx',
          'src/components/FormaTextField/FormaTextField.jsx',
          'src/components/FormaNote/FormaNote.jsx',
          'src/components/FormaTag/FormaTag.jsx',
          'src/components/FormaTooltip/FormaTooltip.jsx',
          'src/components/FormaGrid/FormaGrid.jsx',
          'src/components/FormaGridItem/FormaGridItem.jsx',
          'src/components/FormaRadioButtonField/FormaRadioButtonField.jsx',
          // 'src/components/FormaCheckboxField/FormaCheckboxField.jsx',
          'src/components/FormaModal/FormaModal.jsx'
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'Contentful Wrapped',
};
