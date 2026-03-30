🎵 YouTube to MP3 Converter

A simple tool to convert YouTube videos to MP3 files using Python, Flask, and yt-dlp.

Setup Instructions:

1. Install Python

If you don't have it, download and install Python 3 from python.org.
IMPORTANT: During installation, make sure to check the box that says "Add Python to PATH".

2. Get the FFmpeg "Engine"

This project needs FFmpeg to process the audio.
    Download the "essentials" ZIP from gyan.dev.
    Open the ZIP, go into the bin folder, and copy ffmpeg.exe and ffprobe.exe.
    Paste both files directly into this project folder (where main.py is).

3. Install the Libraries

Open your Command Prompt (CMD) or Terminal inside this folder and run:
pip install -r requirements.txt

4. Start the Converter

Run the following command in your terminal:
python main.py

5. Open the Website

Open your web browser and go to:
http://127.0.0.1:5000/