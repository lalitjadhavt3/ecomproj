# Fix Xcode Configuration for iOS Development

## Issue
The active developer directory is set to Command Line Tools instead of Xcode, which prevents `pod install` from finding the iOS SDK.

## Solution
Run the following command to switch to Xcode:

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

You'll be prompted for your password. After running this command:

1. Verify the switch worked:
   ```bash
   xcode-select -p
   ```
   Should output: `/Applications/Xcode.app/Contents/Developer`

2. Verify Xcode is accessible:
   ```bash
   xcodebuild -version
   ```
   Should show your Xcode version (26.0.1)

3. Accept Xcode license (if needed):
   ```bash
   sudo xcodebuild -license accept
   ```

4. Try `pod install` again:
   ```bash
   cd ios
   pod install
   ```

## Alternative: Use Xcode GUI
You can also open Xcode.app once to complete the initial setup and accept the license agreement.

