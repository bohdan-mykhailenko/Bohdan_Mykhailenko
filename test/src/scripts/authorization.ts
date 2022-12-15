import { DriverController } from '../controller/driver.controller';

const authorization = async (driverController: DriverController): Promise<void> => {
  await driverController.elementAction({
    type: 'addText',
    text: 'Admin',
    cssSelector: 'input[name="username"]',
  });

  await driverController.elementAction({
    type: 'addText',
    text: 'admin123',
    cssSelector: 'input[name="password"]',
  });

  await driverController.elementAction({
    type: 'click',
    cssSelector: 'button[type="submit"]',
  });
};

export { authorization };