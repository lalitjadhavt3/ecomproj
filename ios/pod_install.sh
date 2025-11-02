#!/bin/bash

# Helper script to run pod install with proper Xcode environment
# This works around xcode-select pointing to Command Line Tools

# Set Xcode developer directory
export DEVELOPER_DIR="/Applications/Xcode.app/Contents/Developer"

# Set iOS SDK paths
export SDKROOT="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk"

# Run pod install
cd "$(dirname "$0")"
pod install

