// import { fs } from 'fs';
import { NextResponse } from 'next/server';
const fs = require('fs');
// const path = require('path');

function countFilesInFolder(folderPath: string) {
  try {
    const files = fs.readdirSync(folderPath);
    return files.length;
  } catch (err) {
    console.error('Error counting files:', err);
    return -1; // Return -1 to indicate an error
  }
}

export async function GET() {
  const filePath = './public/images'; // Replace with the path to the file you want to check
  const fileCount = countFilesInFolder(filePath);

  return NextResponse.json({ fileCount });
}
