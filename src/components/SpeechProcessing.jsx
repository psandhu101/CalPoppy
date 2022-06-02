/** @jsxImportSource @emotion/react */

/******* TEXT TO SPEECH *******/

// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';                       // only allows use of declared variables

// sample function from https://github.com/googleapis/nodejs-text-to-speech/blob/HEAD/samples/synthesize.js
async function synthesizeText(text, outputFile) {
    // [START tts_synthesize_text]
    const textToSpeech = require('@google-cloud/text-to-speech');
    const fs = require('fs');
    const util = require('util');

    const client = new textToSpeech.TextToSpeechClient();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const text = 'Text to synthesize, eg. hello';
    // const outputFile = 'Local path to save audio file to, e.g. output.mp3';

    const request = {
        input: {text: text},
        voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
        audioConfig: {audioEncoding: 'MP3'},
    };
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${outputFile}`);
    // [END tts_synthesize_text]
}

// sample quickstart function
// Imports the Google Cloud client library
// const textToSpeech = require('@google-cloud/text-to-speech');

// // Import other required libraries
// const fs = require('fs');
// const util = require('util');
// // Creates a client
// const client = new textToSpeech.TextToSpeechClient();
// async function quickStart() {
//   // The text to synthesize
//   const text = 'hello, world!';

//   // Construct the request
//   const request = {
//     input: {text: text},
//     // Select the language and SSML voice gender (optional)
//     voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
//     // select the type of audio encoding
//     audioConfig: {audioEncoding: 'MP3'},
//   };

//   // Performs the text-to-speech request
//   const [response] = await client.synthesizeSpeech(request);
//   // Write the binary audio content to a local file
//   const writeFile = util.promisify(fs.writeFile);
//   await writeFile('output.mp3', response.audioContent, 'binary');
//   console.log('Audio content written to file: output.mp3');
// }
// quickStart();

// sample main function
// async function main() {
//     require(`yargs`) // eslint-disable-line
//         .demand(1)
//         .command('text <text>', 'Synthesizes audio file from text', {}, opts =>
//             synthesizeText(opts.text, opts.outputFile)
//         )
//         .command('ssml <ssml>', 'Synthesizes audio file from SSML', {}, opts =>
//             synthesizeSsml(opts.ssml, opts.outputFile)
//         )
//         .command(
//             'text-file <textFile>',
//             'Synthesizes audio file from text in a file',
//             {},
//             opts => synthesizeTextFile(opts.textFile, opts.outputFile)
//         )
//         .command(
//             'ssml-file <ssmlFile>',
//             'Synthesizes audio file from SSML in a file',
//             {},
//             opts => synthesizeSsmlFile(opts.ssmlFile, opts.outputFile)
//         )
//         .options({
//             outputFile: {
//             alias: 'o',
//             default: 'output.mp3',
//             global: true,
//             requiresArg: true,
//             type: 'string',
//             },
//         })
//         .example('node $0 text "hello" -o hello.mp3')
//         .example('node $0 ssml "<speak>Hello there.</speak>" -o hello.mp3')
//         .example('node $0 text-file resources/hello.txt -o output.mp3')
//         .example('node $0 ssml-file resources/hello.ssml -o output.mp3')
//         .wrap(120)
//         .recommendCommands()
//         .epilogue(
//             'For more information, see https://cloud.google.com/text-to-speech/docs'
//         )
//         .help()
//         .strict().argv;
// }





/******* SPEECH TO TEXT *******/

// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This application demonstrates how to perform basic recognize operations with
 * with the Google Cloud Speech API.
 *
 * For more information, see the README.md under /speech and the documentation
 * at https://cloud.google.com/speech/docs.
 */


// sample function from https://github.com/googleapis/nodejs-speech/blob/HEAD/samples/recognize.js
function streamingMicRecognize(encoding, sampleRateHertz, languageCode) {
    // [START speech_transcribe_streaming_mic]
    const recorder = require('node-record-lpcm16');

    // Imports the Google Cloud client library
    const speech = require('@google-cloud/speech');

    // Creates a client
    const client = new speech.SpeechClient();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
    // const sampleRateHertz = 16000;
    // const languageCode = 'BCP-47 language code, e.g. en-US';

    const request = {
        config: {
            encoding: encoding,
            sampleRateHertz: sampleRateHertz,
            languageCode: languageCode,
        },
        interimResults: false, // If you want interim results, set this to true
    };

    // Create a recognize stream
    const recognizeStream = client
        .streamingRecognize(request)
        .on('error', console.error)
        .on('data', data =>
        process.stdout.write(
            data.results[0] && data.results[0].alternatives[0]
                ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
                : '\n\nReached transcription time limit, press Ctrl+C\n'
        )
    );

    // Start recording and send the microphone input to the Speech API.
    // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
    recorder
        .record({
            sampleRateHertz: sampleRateHertz,
            threshold: 0,
            // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
            verbose: false,
            recordProgram: 'rec', // Try also "arecord" or "sox"
            silence: '10.0',
        })
        .stream()
        .on('error', console.error)
        .pipe(recognizeStream);

    // TODO: stop when no input instead of with ctrl+c
    console.log('Listening, press Ctrl+C to stop.');
    // [END speech_transcribe_streaming_mic]
}

export { synthesizeText };