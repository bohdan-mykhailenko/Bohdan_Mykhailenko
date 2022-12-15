import { By } from 'selenium-webdriver';
import { DriverController } from '../controller/driver.controller';

const deleteUserRecord = async (driverController: DriverController, fakeName: string): Promise<boolean[]> => {
  await driverController.waitCssElement('.oxd-table .oxd-table-body');
  await driverController.waitCssElement('.oxd-table .oxd-table-body > .oxd-table-card > .oxd-table-row');

  const allUserRecordsRows = await driverController.getAllElementByCss(
    '.oxd-table .oxd-table-body > .oxd-table-card > .oxd-table-row',
  );

  if (!allUserRecordsRows || !allUserRecordsRows?.length) {
    throw Error('No user records');
  }

  let targetRow = 1;

  for (const recordRow of allUserRecordsRows) {
    const record = await recordRow.findElement(By.css('.oxd-table-cell:nth-child(2) div'));

    if ((await record.getText()).trim() === fakeName.trim()) {
      break;
    }

    targetRow++;
  }

  if (targetRow > allUserRecordsRows.length) {
    throw Error('No such record');
  }

  const targetRecord = `.oxd-table .oxd-table-card:nth-child(${targetRow}) .oxd-table-row`;

  const isSalariesDeleted = await driverController.isElementContainThisText({
    targetElementCssSelector: `${targetRecord} div:nth-child(3) div`,
    text: '',
  });

  await driverController.elementAction({
    type: 'click',
    cssSelector: `${targetRecord} .oxd-table-cell-actions button:first-child`,
  });

  await driverController.waitCssElement('.orangehrm-modal-footer');

  await driverController.elementAction({
    type: 'click',
    cssSelector: '.orangehrm-modal-footer button:last-child',
  });

  let isUserRecordDeleted = true;

  const allUserRecord = await driverController.getAllElementByCss(
    '.oxd-table .oxd-table-body > .oxd-table-card > .oxd-table-row',
  );

  if (!allUserRecord || !allUserRecord.length) {
    return [isSalariesDeleted, true];
  }

  for (const currentRow of allUserRecord) {
    const curRowElement = await currentRow.findElement(By.css('.oxd-table-cell:nth-child(2) div'));
    if ((await curRowElement.getText()).trim() === fakeName.trim()) {
      isUserRecordDeleted = false;
      break;
    }
  }

  return [isSalariesDeleted, isUserRecordDeleted];
};

export { deleteUserRecord };
