$(function(){
	var $trigger = $("#resultButton");

	// ボタンがclickされたときにfilePath内の文字列からwin/macのファイルパスを作成する
	$trigger.on('click', function() {
		var $filePath = $("#filePath").val(); // 文字列の取得

		$filePath = $filePath.normalize('NFC'); // 取得した文字列をNFC型に変換 半濁点対応

		// ファイルパス作成
		converter($filePath);
	});


	// enterキーの押下でclick起動
	$("#filePath").on("keydown", function(key){
		if(key.keyCode == 13){
			$trigger.trigger('click');
		}
	});

	var error = function() {
		alert("変換できないパスです");
	};

	var converter =function($filePath) {
		// ファイルパス以外で変換の処理をしようとしたらエラーにする
		if($filePath.match(/\\|^smb:/)){
			// macのファイルパスだった場合はtrue
			if($filePath.match(/^smb:/)){
				// パスをwin用のパスに置換する
				result = $filePath.replace(/^smb:/,"");
				result = result.replace(/[/]/g, '\\');
				var resultText = "■win<br>" + result + "<br>■mac<br>" + $filePath;

				$(".mdResultConverter").html(resultText);
	
			}else {
				// パスをmac用のパスに置換する
				result = $filePath.replace(/\\/g,"/");
				result = "smb:" + result;
				var resultText = "■win<br>" + $filePath + "<br>■mac<br>" + result;

				$(".mdResultConverter").html(resultText);
			}
		}else {
			error();
		}
	}
});