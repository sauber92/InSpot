<!DOCTYPE html>
<meta charset="utf-8" />
<?php
<head>
	<title>Setting</title>
	<meta charset="utf-8">
	<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'>
	<link href="/src/base.css" rel="stylesheet" />
	<script type="text/javascript" src="/src/inspot.js"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
</head>

<body>
	<div id="top-bar">
			<input type="image" id="logo" style="height:50px;width:auto;" src="/src/img/logo.png" />
			<input type="image" id="settingButton" style="height:24px;width:24px;" src="/src/img/btn-settings.png" />
	</div>
</body>


session_start();
if(!isset($_SESSION['user_id']) || !isset($_SESSION['user_name'])) {
	echo "<meta http-equiv='refresh' content='0;url=login.php'>";
	exit;
}
$user_id = $_SESSION['user_id'];
$user_name = $_SESSION['user_name'];
echo "<p>안녕하세요. $user_name($user_id)님</p>";
echo "<p><a href='logout.php'>로그아웃</a></p>";
?>
