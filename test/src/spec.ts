import 'jasmine';
import { Browser, Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { URL } from './consts/consts';
import { DriverController } from './controller/driver.controller';
import { authorization } from './scripts/authorization';
import { addMinMaxSalaries } from './scripts/addMinMaxSalaries';
import { deleteMinMaxSalaries } from './scripts/deleteMinMaxSalaries';
import { deleteUserRecord } from './scripts/deleteUserRecord';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;

let driverController: DriverController;
let fakeName: string;

beforeAll(async () => {
  const option = new Options().addArguments('--start-maximized');
  const driver = new Builder().forBrowser(Browser.CHROME).setChromeOptions(option).build();

  driverController = new DriverController(driver);
  fakeName = 'Albert228';

  await driverController.loadPage(URL, until.elementLocated(By.css('.oxd-input')));
});

afterEach(async () => {
  await driverController.waitCssElement('body');
});

afterAll(async () => {
  await driverController.closeBrowser();
});

describe('lets go test', () => {
  it('authorization work correctly', async () => {
    await authorization(driverController);

    await driverController.wait(until.elementLocated(By.css('.oxd-layout')));

    expect(!!(driverController.getElementByCss('.oxd-layout'))).toEqual(true);
  });

  it('add and display min & max salaries work correctly', async () => {
    const [minSalary, maxSalary] = await addMinMaxSalaries(driverController, fakeName);

    const isMinSalaryDisplayCorrect = await driverController.isElementContainThisText({
      text: `${minSalary}.00`,
      targetElementCssSelector: '.oxd-table-card > .oxd-table-row:last-child > div:nth-child(3)',
    });

    const isMaxSalaryDisplayCorrect = await driverController.isElementContainThisText({
      text: `${maxSalary}.00`,
      targetElementCssSelector: '.oxd-table-card > .oxd-table-row:last-child > div:nth-child(4)',
    });

    expect(isMaxSalaryDisplayCorrect).toBe(true);
    expect(isMinSalaryDisplayCorrect).toBe(true);
  });

  it('delete min & max salaries work correctly', async () => {
    await deleteMinMaxSalaries(driverController);

    const emptyCurrensyField = driverController.getAllElementByCss('.orangehrm-bottom-container > div');

    if (Array.isArray(emptyCurrensyField)) {
      expect(emptyCurrensyField.length).toEqual(0);
    } else if (!emptyCurrensyField) {
      expect(emptyCurrensyField).toEqual(null);
    }
  });

  it('display and delete user record on admin panel work correctly', async () => {
    const [isSalariesDeleted, isUserRecordDeleted] = await deleteUserRecord(driverController, fakeName);

    expect(isSalariesDeleted).toBe(true);
    expect(isUserRecordDeleted).toBe(true);
  });
});
