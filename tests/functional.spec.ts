import { test } from '@playwright/test';
import * as path from "path";

const sleep = async (ms : number) => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(null), ms));
};

const URL = `file:///${path.dirname(__dirname)}/docs/index.html`;

test('basic test', async ({ page }) => {
  await page.goto(URL);
  const email = await page.$('#email');
  const password = await page.$('#password');

  await page.screenshot({ path: `screenshot-start-page.png`, fullPage: true });


  await page.click('#login-button');
  await sleep(2000);
  await page.screenshot({ path: `screenshot-invalid-input.png`, fullPage: true });


  await email.type("")
  await password.type('miPassword');
  await page.click('#login-button');
  await sleep(2000);
  await page.screenshot({ path: `screenshot-invalid-input-email.png`, fullPage: true });


  await email.type("correo@gmail.com")
  await password.fill('')
  await page.click('#login-button');
  await sleep(2000);
  await page.screenshot({ path: `screenshot-invalid-input-password.png`, fullPage: true });

  await email.type("correo@gmail.com")
  await password.type('miPassword');
  await sleep(2000);
  await page.screenshot({ path: `screenshot-before-login.png`, fullPage: true });

  await page.click('#login-button');
  await sleep(2000);
  await page.screenshot({ path: `screenshot-after-login.png`, fullPage: true });

  await page.click('#logout-button');
  await sleep(2000);
  await page.screenshot({ path: `screenshot-after-logout.png`, fullPage: true });
});
