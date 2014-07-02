kontrol-cli
===========

Control Spotify from your terminal

![Screenshot](https://github.com/carlbarrdahl/spotify-kontrol-cli/raw/master/screenshot.png)

## How to use
Install module globally:

```bash
npm install -g spotify-kontrol-cli
```

Set server url:

```bash
kontrol config set server "ws://localhost:8080"
```

Install Spotify app:
https://github.com/carlbarrdahl/spotify-kontrol-app

Run server and connect Spotify app

## Commands

### kontrol play

Play track

```bash
kontrol play
```

### kontrol pause

Pause track

```bash
kontrol pause
```

### kontrol next

Play next track

```bash
kontrol next
```

### kontrol prev

Play previous track

```bash
kontrol prev
```

### kontrol vol <value>

Set player volume

```bash
kontrol vol <value>
```

### kontrol shuffle <boolean>

Set shuffle mode

```bash
kontrol shuffle <boolean>
```

### kontrol repeat <boolean>

Set repeat mode

```bash
kontrol repeat <boolean>
```
