test.only("verify that the title can have max 200 characters", async ({ page }) => {
  await page.goto("https://my.staging.adaptiveu.app/");
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Enter Title").fill("");//emptties a particular field
  for (let i = 1; i <= 201; i++) {
    await page.getByPlaceholder("Enter Title").type("1");
  }

  await page.getByRole("button", { name: "save" }).click();
  await expect(page.getByPlaceholder("Enter Title")).toHaveClass(
    "link-name error"
  );
});
