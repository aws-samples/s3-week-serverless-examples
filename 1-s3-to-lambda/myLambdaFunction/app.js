/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

exports.handler = async (event) => {
    console.log('This is the event received by Lambda from S3.')
    console.log(JSON.stringify(event, null, 2))
}
