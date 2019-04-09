const faker = require('faker')

describe('Google', () => {
  beforeEach(async () => {
    await page.goto('http://www.joaovanzuita.me');
  });

  it('should be titled "Full Stack"', async () => {
    await expect(page.title()).resolves.toMatch('João Vanzuita - Full Stack Developer');
  }, 10000);

  it('should load first post', async () => {
    const firstPostLink = await page.waitForXPath('(//a)[1]')
    await firstPostLink.click()
    let postTitle = null
    try {
      postTitle = await page.waitForXPath('(//p)[5]')
    } catch (err) {
      console.log(err)
    }
    expect(postTitle).not.toBe(null)
  })

  it('should send test email', async () => {
    // fill the form with, name:
    const nameField = await page.waitForXPath('(//form/div/input)[1]')
    await nameField.type(`${faker.name.firstName()} ${faker.name.lastName()}`)
    // e-mail
    const emailField = await page.waitForXPath('(//form/div/input)[2]')
    await emailField.type(`${faker.internet.email()}`.toLowerCase())
    // subject
    const subjectField = await page.waitForXPath('(//form/div/input)[3]')
    await subjectField.type(`${faker.random.words(3)}`)
    // message
    const messageField = await page.waitForXPath("//textarea[@name='msg']")
    await messageField.type(`${faker.lorem.sentences(5)}`)
    // submit button
    const submitButton = await page.waitForXPath("//button[@type='submit'][text()='Submit']")
    await submitButton.click()

    await page.waitFor(5000)
    const emailStatus = await page.waitForXPath("//div[text()='Email sent !']")
    const emailSentMessage = await (await emailStatus.getProperty('textContent')).jsonValue()

    // console.log(text)
    expect(emailSentMessage).toMatch('Email sent !')
  }, 20000)


});
