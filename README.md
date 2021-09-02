# HostingFullStackApp

This project demonstrates on how to host web application (frontend, backend, database) in AWS cloud.

Application link: http://randomudagram123.s3-website-ap-southeast-1.amazonaws.com

## Application Feature List

- register new user and login for existing user
- upload image and caption
- view uploaded image and caption

## Project Tech Stack
Database: PostgreSQL

Server API: Node.js

Frontend: Angular

Cloud Platform: AWS (Amazon Web Service)

CI/CD Pipeline: CircleCI

## Project Setup

Clone the project - git clone https://github.com/nicolaurent/HostingFullStackApp.git

### Frontend setup
Install dependencies in `udagram-frontend` directory

`npm install`

### Backend setup

Install dependencies in `udagram-api` directory

`npm install`

### Install AWS CLI and EB CLI to support local deployment to AWS platform

AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html

EB CLI: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-windows.html

## System Architect Overview

![System Design](https://user-images.githubusercontent.com/14368846/131787835-f774d3e7-6327-4b97-982d-7bf70d12acdb.JPG)

## Pipeline Process

The pipeline is split into 2 processes: frontend and backend. Both processes are running in parallel to save build and deployment time.

#### Frontend Pipeline
- Install dependencies
- Setup AWS CLI
- Build
- Deploy

#### Backend Pipeline
- Install dependencies
- Setup EB CLI
- Build
- Test
- Deploy

## Screenshots
Below are the screenshots from the latest built

### RDS - Database

![RDS](https://user-images.githubusercontent.com/14368846/131789964-0db1ca8b-56fc-4bf3-b2d0-c85aebce7f43.JPG)

### Elastic Beanstalk - API Server

Dashboard

![EB Dashboard](https://user-images.githubusercontent.com/14368846/131790704-4aad2dd0-4e6f-4135-9742-3029a742ccfc.JPG)

Environment Variables

![EB Env Variable Censored](https://user-images.githubusercontent.com/14368846/131790722-f77fddf4-cfcd-4e4a-b67e-d40b0e38718e.JPG)

### Amazon S3

![S3 Dashboard](https://user-images.githubusercontent.com/14368846/131790902-40cccb54-0ed0-44f8-ae59-9f2588371107.JPG)

### CircleCI

#### Dashboard

![CircleCI Dashboard](https://user-images.githubusercontent.com/14368846/131791090-b4faae2f-e15a-4e72-9fa9-f7446c13a604.JPG)

#### Environment Variables

![CircleCI Env Variables](https://user-images.githubusercontent.com/14368846/131793327-e6f4eff3-3e53-4f2a-baba-5af87b182cbb.JPG)


#### Frontend_build_deploy

![Frontend_build_deploy](https://user-images.githubusercontent.com/14368846/131793074-45a89e43-4002-486c-8369-90541eeb37e0.png)

#### Backend_build_deploy

![Backend_build_deploy](https://user-images.githubusercontent.com/14368846/131793105-ad114a47-529f-46d4-a392-4d7657b59bd7.png)
