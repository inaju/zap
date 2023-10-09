import { spawn } from 'child_process';
import { NextResponse } from 'next/server';
// const fs = require('fs');
// const path = require('path');

export async function GET() {
  const python = spawn('python', ['src/app/api/run-python/hello.py']);

  console.log(python.stdout, 'python');

  let dataToSend = '';

  for await (const data of python.stdout) {
    //console.log(data.toString());
    dataToSend += data.toString();
  }
  return NextResponse.json({ dataToSend });
}
