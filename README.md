# azure-static-web-app (Terraform code DOES NOT work for USGOV cloud)
Deploy website to Azure Static Web App

---

# Clone the repository

With the repository created in your GitHub account, clone the project to your local machine using the following command.

---

# Install Azure Static Web Apps extension

1. Select View > Extensions.
2. In the Search Extensions in Marketplace, type Azure Static Web Apps.
3. Select Install for Azure Static Web Apps.
4. The extension installs into Visual Studio Code.

---

# Using Publish Profile as Deployment Credential (recommended)
Using publish profile as deployment credential is recommended if you are not the owner of your Azure subscription. Follow these steps to configure your workflow to use the publish profile from your function app.

1. In Azure portal, go to your function app.
2. Click Get publish profile and download .PublishSettings file.
3. Open the .PublishSettings file and copy the content.
4. Paste the XML content to your GitHub Repository > Settings > Secrets > Add a new secret > AZURE_FUNCTIONAPP_PUBLISH_PROFILE
5. Use one of the above workflow templates as a reference to build your workflow in .github/workflows/ directory.
6. Change variable values in env: section according to your function app.
7. Commit and push your project to GitHub repository, you should see a new GitHub workflow initiated in Actions tab.
