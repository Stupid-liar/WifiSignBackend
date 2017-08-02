var data1;
var data2;
var object_js;
var s=new Array();
s.push('btn-danger');
s.push('btn-success');
var messageList=document.getElementById('message-list');
var allList=document.getElementById('all-list');
var object_no;
var noList=document.getElementById('no-list');
var student_name;
class_number=12;
function changeClass(which){
if(which!=null){
	class_number = $(which).text();
	$("#classList").show();
	$("#clone").css("display","none");
	var span=document.getElementById("class");
	span.innerHTML = class_number;
 }
	$.ajax({
		url: 'http://192.168.1.100:9000/main_page/front/data', //在这里提填写你的地址
		async: false,
		dataType: 'jsonp',
		data:{'class_number':class_number},
		type:'get',
		jsonp:"callback", 
		crossDomain: true,
		jsonpCallback:"callback",
		success: function (json_str) {
			object_js = json_str;
			showAllList();
		}
	});
}

function showAllList(){
	$('#all-list tr').remove();
	var size=0,key;
	var statuses=new Array();
	var names=new Array();
	for(key in object_js){
		if(object_js.hasOwnProperty(key)){
			names.push(key);
			statuses.push(object_js[key]);
			size++;
		}
	}
	var i=0;
	for(i=0;i<size;){
		var tr=document.createElement('tr');
		do{
			if(i>=size){
				break;
			}
			var td=document.createElement('td');
			var btn=document.createElement('a');
			btn.innerHTML=names[i];
			btn.setAttribute('onclick','student_message(this)');
			$(btn).attr('href','#');
			$(btn).addClass('btn');
			$(btn).css('width','100%');
			$(btn).addClass(s[statuses[i]]);
			td.appendChild(btn);
			tr.appendChild(td);
			i++;
		}while(i%7!=0);
		allList.appendChild(tr);
	}
}
function student_message(which){

student_name=which.innerHTML;
$("#classList").hide();
$("#clone").css("display","");
changeMessage();
}

function changeMessage(){
	$.ajax({
		url: 'http://192.168.1.109:9000/admin/list', //在这里提填写你的地址
		async: false,
		dataType: 'jsonp',
		data:{'student_name':student_name},
		type:'get',
		jsonp:"callback", 
		crossDomain: true,
		jsonpCallback:"callback",
		success: function (json_str) {
			object_js = json_str;
			showMessageList();
		}
	});
}
function createInfo(text,tr){
	var td=document.createElement('td');
	var btn=document.createElement('a');
	$(td).css("padding","0px");
	$(td).css("margin-top","-2px");
	btn.innerHTML=text;
	$(btn).attr('href','#');
	$(btn).addClass('btn');
	$(btn).css('width','100%');
	$(btn).css('height','100%');
	$(btn).css('background-color','white');
	$(btn).css('color','black');
	$(btn).css('border-color','black');
	$(btn).css('border-radius','0');
	var maxNum=$(btn).html();
		if(maxNum.length>15){
			$(btn).html(maxNum.substr(0,15)+"...")
	}
	btn.setAttribute('title',text);
	td.appendChild(btn);
	tr.appendChild(td);
	messageList.appendChild(tr);
}

function showMessageList(){
	$('#message-list tr').remove();
	var students_list = object_js.list;
	for(var i = 0; i < students_list.length; i++){
		student = students_list[i];
		var info_list = new Array();
		var tr=document.createElement('tr');
		var student_name = student['student_name'];
		var student_id = student['student_id'];
		var number = student['number'];
		var date = student['date'];
		var time_start = student['time_start'];
		var time_end = student['time_end'];
		var time = student['time'];
		var remarks = student['remarks'];
		createInfo(number,tr);
		createInfo(student_name,tr);
		createInfo(student_id,tr);
		createInfo(date,tr);
		createInfo(time_start,tr);
		createInfo(time_end,tr);
		createInfo(time,tr);
		createInfo(remarks,tr);
		messageList.appendChild(tr);
	}
}

window.onload=function(){
	changeClass();
	data2=setInterval('changeClass()',2000);//6000是间隔时间  单位为毫秒 6000就是一分钟
} 