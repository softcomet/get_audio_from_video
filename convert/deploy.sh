#!/bin/bash
# == Bash script to upload converter code to s3 ==

rm /tmp/gafv.tar.gz
tar -zcvf /tmp/gafv.tar.gz ../ --exclude=".git"

# Setup AWS creds for S3cmd
echo "[default]
access_key = AKIAIO3ILO2MW5GQQPNQ
secret_key = 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" > /tmp/gafvs3cfg
s3cmd -c /tmp/gafvs3cfg put /tmp/gafv.tar.gz s3://gafv-application/gafv.tar.gz
rm /tmp/gafv.tar.gz
