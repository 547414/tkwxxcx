<?php
// upload_file.php
header("content-type:text/html;charset=utf-8");
if ($_FILES["file"]["type"] == "text/plain") {
    // 上传检测
    if ($_FILES["file"]["error"] > 0) {
        echo "错误码: " . $_FILES["file"]["error"] . "<br />";
    } else {
        echo '上传成功！<br/>';
        echo "文件: " . $_FILES["file"]["name"] . "<br />";
        echo "类型: " . $_FILES["file"]["type"] . "<br />";
        echo "大小: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
        // 文件检测,这里的upload最好改一下，改成随机的，比如dakfjjkgfryyai3whja之类的，可以很大程度上防止盗取题库文件
        if (file_exists("upload/" . $_FILES["file"]["name"])) {
            echo $_FILES["file"]["name"] . " 文件已经上传过. ";
        } else {
            // 创建文件夹
            is_dir('upload') || mkdir("upload", 0777, true);
            // 执行存储
			//$date = date('Y-m-d H:i:s');
			//$date = str_replace(' ', '', $date);
			//$date = str_replace('-', '', $date);
			//$date = str_replace(':', '', $date);
			$date=microtime(true);//获取时间戳
            $date=str_replace('.','',$date);
            $str = rand(10, 10000);
            $temp=substr($date,strlen($date)/2-2,strlen($date)/2+1);
            $temp=$str.$temp;
            move_uploaded_file($_FILES["file"]["tmp_name"],"upload/" .$temp.".txt");
            echo "微信小程序导入ID: " . $temp;
        }
    }
} else {
    echo "上传文件类型不支持哦";
}
