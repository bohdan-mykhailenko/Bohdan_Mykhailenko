import { By, until } from 'selenium-webdriver';
import { DriverController } from '../controller/driver.controller';

const addMinMaxSalaries = async (driverController: DriverController, fakeName: string): Promise<string[]> => {
  const minSalary = 1000;
  const maxSalary = 10000;

  await driverController.waitCssElement('.oxd-main-menu > .oxd-main-menu-item-wrapper:first-child > .oxd-main-menu-item');
  await driverController.elementAction({
    type: 'click',
    cssSelector: '.oxd-main-menu > .oxd-main-menu-item-wrapper:first-child > .oxd-main-menu-item',
  });

  await driverController.wait(until.elementLocated(By.css('.oxd-topbar-body-nav > ul')));
  await driverController.clickDropDownItemByCss({
    dropdownCssSelector: '.oxd-topbar-body-nav > ul li:nth-child(2)',
    dropdownItemCssSelector: '.oxd-topbar-body-nav > ul li:nth-child(2) > .oxd-dropdown-menu > li:nth-child(2)',
  });

  await driverController.waitCssElement('.orangehrm-header-container');
  await driverController.elementAction({
    cssSelector: '.orangehrm-header-container > div:last-child > button:last-child',
    type: 'click',
  });

  await driverController.waitCssElement('.oxd-input');
  await driverController.elementAction({
    type: 'addText',
    text: String(fakeName),
    cssSelector: '.oxd-form > .oxd-form-row .oxd-input',
  });
  await driverController.elementAction({
    type: 'click',
    cssSelector: 'button[type="submit"]',
  });

  await driverController.waitCssElement('.orangehrm-action-header');
  await driverController.elementAction({
    type: 'click',
    cssSelector: '.orangehrm-action-header > button:last-child',
  });

  await driverController.waitCssElement('.orangehrm-card-container > .oxd-form');

  await driverController.waitCssElement('.oxd-select-wrapper');

  await driverController.clickDropDownItemByCss({
    dropdownCssSelector: '.oxd-select-wrapper',
    dropdownItemCssSelector: '.oxd-select-dropdown > div:nth-child(42)',
  });

  await driverController.elementAction({
    type: 'addText',
    text: String(minSalary),
    cssSelector: '.orangehrm-card-container:nth-child(2) > .oxd-form .oxd-form-row:nth-child(2) > div:first-child > div:first-child .oxd-input',
  });
  await driverController.elementAction({
    type: 'addText',
    text: String(maxSalary),
    cssSelector: '.orangehrm-card-container:nth-child(2) > .oxd-form .oxd-form-row:nth-child(2) > div:first-child > div:last-child .oxd-input',
  });
  await driverController.elementAction({
    type: 'click',
    cssSelector: '.orangehrm-card-container:nth-child(2) button[type="submit"]',
  });

  await driverController.waitCssElement('.oxd-table-card > .oxd-table-row:last-child > div:nth-child(3)');

  return [String(minSalary), String(maxSalary)];
};

export { addMinMaxSalaries };