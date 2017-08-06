

	(function checkSession(){
		alert(21456);
		$.ajax({
			url: 'http://119.29.184.156:9000/admin/list', //在这里提填写你的地址
			async: false,
			dataType: 'jsonp',
			data:{'student_name':"万"},
			type:'get',
			jsonp:"callback_info", 
			crossDomain: true,
			jsonpCallback:"callback_info",
			success: function (json_str) {
				location.href="http://www.baudu.com";
			}
		});
	})();

