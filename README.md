# S3 Week - S3-to-Lambda image processing examples

This repo contains examples featured in the S3 Week live coding demos:

1. S3-to-Lambda: deploys an S3 bucket and Lambda function that logs object metadata when new objects are uploaded.
2. Resize: deploys a Lambda function that sizes images uploaded to the 'source' bucket and saves the output in a 'destination' bucket.
3. Chromakey and compositing: deploys three buckets and two Lambda functions. The first removes a green background from an image, and the second composites the result.

Learn more about these examples by watching a replay of the video: TBD.

Important: these applications uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the [AWS Pricing page](https://aws.amazon.com/pricing/) for details. You are responsible for any AWS costs incurred. No warranty is implied in this example.

## Requirements

* AWS CLI already configured with Administrator permission
* [NodeJS 12.x installed](https://nodejs.org/en/download/)
* [Python 3.6 installed](https://www.python.org/downloads/release/python-360/)

## Installation Instructions

1. [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and login.

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [install the AWS Serverless Application Model CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) on your local machine.

1. Create a new directory and navigate to that directory in a terminal.

1. Clone this repo:

```
git clone this-repo-name
```

2. In each subdirectory, run:
```
sam build
sam deploy --guided
```

----
Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.

SPDX-License-Identifier: MIT-0
