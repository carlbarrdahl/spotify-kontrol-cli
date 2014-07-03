kontrol-cli
===========

Send commands to a remote Spotify client with your terminal

![Screenshot](https://github.com/carlbarrdahl/spotify-kontrol-cli/raw/master/screenshot.png)

## How to use
1. Install module globally: ```npm install -g spotify-kontrol-cli```
2. Install and run Spotify app: https://github.com/carlbarrdahl/spotify-kontrol-app
3. Set channel displayed in the Spotify app: ```kontrol config set channel "asdf"```
4. ```kontrol play```

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
