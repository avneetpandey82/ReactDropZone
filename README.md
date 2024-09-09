# ReactDropZone

A simple, lightweight, and customizable drag-and-drop library for modern web applications. This package allows you to easily implement drag-and-drop functionality in your web projects with minimal setup and code.

## Features

- **Easy to Use**: Integrates seamlessly with your existing projects.
- **Customizable**: Modify drag-and-drop behavior to suit your needs.
- **Lightweight**: Minimal footprint with efficient performance.
- **Flexible API**: Provides various options to control the drag-and-drop process.

## Installation

Install the package using npm:

```bash
npm install ReactDropZone
```

Or via yarn:

```bash
yarn add ReactDropZone
```

## Usage

### Basic Setup

```bash
import ReactDropZone from "ReactDropZone";

function myApp(){
    const uploadFile = (file)=>{
        console.log(file)
    }
    return <>
    <ReactDropZone uploadFile={uploadFile} type={[  ".pdf",".doc",".docx",".xlsx",".xls",".csv",".ppt",".pptx",".txt",".js",".jpg",".jpeg",".png",".mkv",".mp4",]} allowMultiple/>
    </>
}
```
