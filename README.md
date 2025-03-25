# Boiler Room Interview Challenge

This challenge is comprised of a Next.js app that you can run locally,
and a number of tasks for you to complete.

You are expected to have a working knowledge of how to use `git`,
and can use any NPM package manager of your choice.

When completing the tasks,
please commit regularly to show your progress and working.
When you are finished, please supply your answers in a zip archive,
but avoid including any files ignored by `.gitignore`.

You are not necessarily expected to know and have experience
with all technologies that you'll be exposed to as part of this exercise,
so feel free to search and use any tools you would typically use
during normal development
(i.e. online documentation, search engines, AI coding assistants, etc...)

Additionally, you are not expected to focus on making things look pretty.
Beyond small amounts of CSS / styling,
it's better to focus on the code itself as this is what we'll be assessing.

## The project

You will be working on a web application that allows users to
upload & manage audio files,
and play them back in their browser in interesting ways.

In the project's current form,
a user can open an audio file in the browser,
and play / pause the audio track.

There is an [example music file](./example.mp3) in this repo,
but you are free to use whichever audio files you want.

## Tasks

1. Using the Web Audio API,
   introduce a way for the user to change the playback speed of the audio.

   You should make sure that the existing functionality,
   play-pause, etc.. continue to work.

   Take a look at the
   [`AudioBufferSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode) docs as a starting point.

2. Using the Web Audio API,
   introduce a way for the user to add either a high-pass or low-pass filter
   to the audio. You will want to use a `BiquadFilterNode` for this.

   For an explanation of what high & low pass filters are,
   see this video on youtube: <https://www.youtube.com/watch?v=oLVzhSw7hcw>

   The user should be able to adjust the intensity,
   and switch between a high-pass and low-pass filter as the music is playing.

3. Users want to be able to keep their settings between page-loads and visits.
   Using the storage APIs that we've defined,
   ensure that when users change their high/low-pass filter options,
   or playback speed,
   that the settings for the current user get saved.

4. Having to upload / open files every time you load the page is annoying.
   Introduce a new `library` page where users can upload files to the app,
   and rename / delete their files.
   Use the storage APIs that we've defined 
   on the server-side to actually store the data.

   (You don't need to connect this to the existing page)

5. Now that a user has a way to manage their library,
   we can use this in the player.
   Update the player route so that it includes the ID of a track,
   and use this to load the specific audio file from the server
   instead of providing an upload button.
   Additionally add link in the library page that will allow the user to load
   each specific track in the player.

## Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [MDN: Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Free PD](https://freepd.com/) - publicly accessible / free music to test with