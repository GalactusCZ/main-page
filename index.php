<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Startup</title>
</head>

<body>
  <h1>This is the main page</h1>

  <form method="post">
    <input type="submit" name="start" value="Start PC" />
  </form>

  <h1>Youtube download</h1>
  
  <form method="post">
    <input type="text" name="url" placeholder="URL">
    <input type="submit" name="download" value="Download file" />
  </form>

  <?php
  if (isset($_POST["start"])) {
    shell_exec("wakeonlan 30:9c:23:27:d6:79");
    header("Location:./");
  }

  if (isset($_POST["download"]) && !empty($_POST["url"])) {
	  $command = '/home/michael/yt-dlp -o "/media/nvme_drive/local_media/music/YT_music/%(title)s.mp3" -x --audio-format mp3 --restrict-filenames ' . $_POST["url"];
	  print_r($command);
    shell_exec($command);
    header("Location:./");
  }
  ?>

</body>

</html>
