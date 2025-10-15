# Poppins Font Setup

## Required Font Files

Download the Poppins font family from Google Fonts and place the following files in this directory:

- `Poppins-Light.ttf` (300 weight)
- `Poppins-Regular.ttf` (400 weight)
- `Poppins-Medium.ttf` (500 weight)
- `Poppins-SemiBold.ttf` (600 weight)
- `Poppins-Bold.ttf` (700 weight)

## Installation Steps

1. Download Poppins from: https://fonts.google.com/specimen/Poppins
2. Extract and copy the .ttf files to this directory
3. Run: `npx react-native-asset` or `npx react-native link`
4. For iOS: Clean and rebuild your project
5. For Android: Clean and rebuild your project

## Font Usage

The fonts are already configured in the Typography theme:
- `Poppins-Bold` for h1 headings
- `Poppins-SemiBold` for h2 headings  
- `Poppins-Regular` for body text
- `Poppins-Light` for captions