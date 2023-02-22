This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
just update

------------------------------------
DevOps Implementation:
------------------------------------

CICD Tool: Azure DevOps
Strategy: Nextjs application deployment to Kubernetes Cluster(AKS)
Container Registry: ACR
Registry Name: mclmprod

Build Process:
---------------

Build Pipeline Name: harwick-docker-build
Container runtime: Docker


Build pipeline URL: https://dev.azure.com/mclm/RAS/_apps/hub/ms.vss-ciworkflow.build-ci-hub?_a=edit-build-definition&id=16417

Template for Build pipeline: ALM JavaScript Container Application
Docker Registry Service Connection: mclmprod

Build Pipeline Tasks: 


Task1: Update Version and Build Number

   Will provide project type and will fetch the project.json file to initiate the Versioning for ALM and Build Number.

Task2: Build Container Image

  It is the crucial task in the build process and get required Dockerfile in the repo and build accordingly.
 it will select the dockerfile based on the environment which is the source branch (present in variable definition)
  Name of the image should be: $(ALM.Project.Name):$(ALM.Project.Version)

Task3: Publish Container Image

   Another crucial task and will push the built image to the container registry(ACR) - mclmprod
   Image in the ACR should be: 
   latest image will be tagged as "latest"

Task4: Transform Kubernetes Configuration

    It will Propogate various workload manifest yaml files ie. Deployment,service and Ingress etc. in the host folder.
    Will export when we go through the deployment if we consider this pipeline as artifact.

Task5: Publish Kubernetes Configuration

    Need to publish the artifacts to fetch the values from another pipelines. eg: deployment pipelines
    will publish the host folder which has the manifest files to deployment will be taken place.
    we have named it as "host" for this artifact and publishing location is Azure pipelines.

Task6: Export Build Variables

    Will export the json file which has the details of: App environment
                                                        Alm project Version
                                                        Alm project name

 Tag: Powershell JavaScript

     This value is based on the source branch.                                                       

Post Build Information: 

   If completed the Build pipeline process successfully then image will be pushed to container registry-mclmprod
   Image name in the ACR for further usage: mclmprod.azurecr.io/harwickbase:latest
   Note: If we want to use specific version other than latest version, we can take accordingly.
                                     eg:  mclmprod.azurecr.io/harwickbase:latest:1.1.9


Deployment Process:
-------------------

For the deployment purpose, we are considering AKS (Azure Kubernetes service) which is managed kubernetes service offered by Azure.

Artifact from the pipeline: harwick-docker-build
source alias: harwick-docker-build ( we can put any name. Eg:drop)

Reference Release pipeline: https://dev.azure.com/mclm/RAS/_releaseDefinition?definitionId=83&_a=definition-pipeline


Release to Dev:
--------------------

  Stage name: harwick-base-dev
  Kubernetes service connection: harwick-base-dev

  Crucial tasks:
  --------------- 
  Import Build Variables:
    
       Will import exported variable in the build pipeline(harwick-docker-build) which has been defined as the artifact over here.

  Deploy to Kubernetes Namespace:  
      

       Namespace: harwick-base-dev (Namespace is the logical unit in the kubernetes and way to organize the cluster)

       Command: apply (kubectl is a command line tool used to run commands against Kubernetes clusters)

       FilePath: it will fecth manifest files which resides in the host directory we have exported from the build pipeline.

       Manifest files:

        Deployment.yaml:  it will provide the replicas info and container image info
        service-cluster.yaml:  expose the port and run on the top of deployment
        ingress.yaml:  Access to multiple services


     kubectl is commandline tool which internally plays the role to execute manifest files.

   Once successfully happened the deployment, you can access the dev url: https://harwick-base-dev.kubenonp.mayo.edu   


 Release to Test:
 ---------------
  Stage name: harwick-base-test
  Kubernetes service connection: harwick-base-dev


  Crucial tasks:
  --------------- 
  Import Build Variables:
    
       Will import exported variable in the build pipeline(harwick-docker-build) which has been defined as the artifact over here.

  Deploy to Kubernetes Namespace:  
      

       Namespace: harwick-base-test (Namespace is the logical unit in the kubernetes and way to organize the cluster)

       Command: apply (kubectl is a command line tool used to run commands against Kubernetes clusters)

       FilePath: it will fecth manifest files which resides in the host directory we have exported from the build pipeline.

       Manifest files:

        Deployment.yaml:  it will provide the replicas info and container image info
        service-cluster.yaml:  expose the port and run on the top of deployment
        ingress.yaml:  Access to multiple services


     kubectl is commandline tool which internally plays the role to execute manifest files.

 Once successfully happened the deployment, you can access the dev url: https://harwick-base-test.kubenonp.mayo.edu


 Release to UAT:
 ---------------
  Stage name: harwick-base-uat


  Crucial tasks:
  --------------- 
  Import Build Variables:
    
       Will import exported variable in the build pipeline(harwick-docker-build) which has been defined as the artifact over here.

  Deploy to Kubernetes Namespace:  
      

       Namespace: harwick-base-uat (Namespace is the logical unit in the kubernetes and way to organize the cluster)

       Command: apply (kubectl is a command line tool used to run commands against Kubernetes clusters)

       FilePath: it will fecth manifest files which resides in the host directory we have exported from the build pipeline.

       Manifest files:

        Deployment.yaml:  it will provide the replicas info and container image info
        service-cluster.yaml:  expose the port and run on the top of deployment
        ingress.yaml:  Access to multiple services


     kubectl is commandline tool which internally plays the role to execute manifest files.

 Once successfully happened the deployment, you can access the dev url: https://harwick-base-uat.kubenonp.mayo.edu  
