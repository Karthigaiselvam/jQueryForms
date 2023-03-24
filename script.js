
    $(document).ready (function () { 
            $('#form').submit (function (e) {
                e.preventDefault();
                
                var first_name = $('#fname').val();
                var last_name = $('#lname').val();
                var email = $('#email').val();
                var password1 = $('#password1').val(); 
                var password2 = $('#password2').val();
                var dob = $('#dob').val(); 
                var add = $('#add').val(); 
                var pin = $('#pin').val();
                var mobile = $('#mobile').val();
                var state=$('#state').val();
                var isValid = $("input[name=gender]").is(":checked");
                $(".error").remove(); 
                if (first_name.length < 1) {
                    $('#fname').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                    }else{
                        var x= /^[A-Za-z\s]*$/;
                        var validEmail = x.test(first_name);
                        if (!validEmail) {
                        $('#fname').after('<span style="color:red;" class="error"><small>Enter a valid name</small></span>');
                        }
                    }
                if (last_name.length < 1) {
                    $('#lname').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                    }else{
                        var x= /^[A-Za-z\s]*$/;
                        var validEmail = x.test(last_name);
                        if (!validEmail) {
                        $('#lname').after('<span style="color:red;" class="error"><small>Enter a valid name</small></span>');
                        }
                    }
                if (state.length < 1) {
                    $('#state').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                    }
                    if (!isValid) {
                        $('#gender-d').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                      }
                if (email.length < 1) {
                        $('#email').after('<span style="color:red;" class="error"><small>This field is required</small></span>');
                        }
                        else {
                        var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                        var validEmail = regEx.test(email);
                        if (!validEmail) {
                        $('#email').after('<span style="color:red;" class="error"><small>Enter a valid email</small></span>');
                        }
                        } 
                if(add.length<1){
                    $('#add').after('<span style="color:red;" class="error"><small>This field is required</small></span>');
                }
                if (password1.length < 1) {
                    $('#password1').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                }
                if (password2.length < 1) {
                    $('#password2').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                    }
                if (password1 != password2) {
                    $('#password1').after('<span style="color:red;" class="error"><small>password does not matched!</small></span>')
                    $('#password2').after('<span style="color:red;" class="error"><small>password does not matched!</small></span>')
                    }
                if (dob=="") {
                    $('#dob').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                    }else{
                        dob=new Date(dob);
                        dob=dob.toISOString().split( "T" );
                        let date=new Date()
                        date=date.toISOString().split( "T" );
                        if(dob[0]>=date[0])
                        {
                    $('#dob').after('<span style="color:red;" class="error"><small>please enter valid date</small></span>')
                        }
                    }
                    if (pin=="") {
                        $('#pin').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                        }else{
                            
                            var regEx = /[0-9]{6}/;
                            var validpin = regEx.test(pin);
                            if (!validpin) {
                                $('#pin').after('<span style="color:red;" class="error"><small>enter 6 digit pin</small></span>');
                                }
                        }
                    if (mobile=="") {
                        $('#mobile').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
                        }else{
                            var regEx = /[0-9]{10}/;
                            var validmob = regEx.test(mobile);
                            if (!validmob) {
                                $('#mobile').after('<span style="color:red;" class="error"><small>enter 10 digit number</small></span>');
                                }
                        }
        });

        $('#form2').submit (function (e) {
            e.preventDefault();
            var email = $('#email').val();
            var password = $('#pwd').val();
            $(".error").remove(); 
            if (email.length < 1) {
                      $('#email').after('<span style="color:red;" class="error"><small>This field is required</small></span>');
                      }
                      else {
                      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                      var validEmail = regEx.test(email);
                      if (!validEmail) {
                      $('#email').after('<span style="color:red;" class="error"><small>Enter a valid email</small></span>');
                      }
                      } 
            if (password.length < 1) {
                  $('#pwd').after('<span style="color:red;" class="error"><small>This field is required</small></span>')
              }
          });

    });


