#!/bin/bash
#
# add-packages.sh
#
# Installs Fabric and Crashlytics packages.
# Versions defined in package.json
#
# Requires `jq` (OSX: `brew install jq`)

FABRIC_VERSION=$(cat package.json | jq -r '.packages.fabric')
CRASH_VERSION=$(cat package.json | jq -r '.packages.crashlytics')

echo "Adding packages from package.json:"
echo "Fabric version $FABRIC_VERSION"
echo "Crashlytics version $CRASH_VERSION"

# Create ./tmp/ and download packages
echo "Creating ./tmp/, downloading packages..."
rm -rf ./tmp/
mkdir -p ./tmp/
curl -o ./tmp/fabric.zip "https://kit-downloads.fabric.io/cocoapods/fabric/$FABRIC_VERSION/fabric.zip"
curl -o ./tmp/crashlytics.zip "https://kit-downloads.fabric.io/cocoapods/crashlytics/$CRASH_VERSION/crashlytics.zip"

# Unzip targets
echo "Extracting frameworks..."
unzip -qq ./tmp/fabric.zip -d ./tmp/fabric
unzip -qq ./tmp/crashlytics.zip -d ./tmp/crashlytics

# Clean destination
echo "Cleaning destination ./lib/ios/ ..."
rm -rf ./lib/ios/Crashlytics.framework ./lib/ios/Fabric.framework

# Move files
echo "Transferring frameworks to ./lib/ios/ ..."
mv ./tmp/crashlytics/iOS/Crashlytics.framework ./tmp/fabric/iOS/Fabric.framework ./lib/ios/

# Cleanup
echo "Cleaning temp directory..."
rm -rf ./tmp/

echo "Package install complete!"