
jQuery(document).ready(function() {

    $('.page-container .regist form').submit(function(){
		
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
		var nickname = $(this).find('.nickname').val();
		var email = $(this).find('.email').val();
		var classId = $(this).find('.class_id').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        
		if(nickname == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.nickname').focus();
            });
            return false;
        }
		if(email == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
            return false;
        }
		if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
		if(classId == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '304px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.class_id').focus();
            });
            return false;
        }
    });
	
	
	
	$('.page-container .login form').submit(function(){
		
		var password = $(this).find('.password').val();
		var email = $(this).find('.email').val();
       
		if(email == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
            return false;
        }
		if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });
	

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
