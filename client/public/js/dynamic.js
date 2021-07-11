$(document).ready(function () {
    var x = 0; //Initial field counter
    var list_maxField = 4; //Input fields increment limitation

    //Once add button is clicked
    $('.list_add_button').click(function () {
        //Check maximum number of input fields
        if (x < list_maxField) {
            x++; //Increment field counter
            var list_fieldHTML = 
            '<br></br><div class="form-row"> <div class="form-group col-md-12"> <label for="inputEmail4">College Name</label> <input type="text" name="list[' + x + '][]" class="form-control" id="name" placeholder="College Name" /> </div> <div class="form-group col-md-6"> <label for="inputEmail4">Course Name</label> <input type="text" name="list[' + x + '][]" class="form-control" id="phone" placeholder="Course Name" /> </div> <div class="form-group col-md-6"> <label for="inputEmail4">Branch </label> <input type="text" name="list[' + x + '][]" class="form-control" id="phone" placeholder="Branch " /> </div> <div class="form-group col-md-6"> <label for="inputEmail4">Year </label> <input type="text" name="list[' + x + '][]" class="form-control" id="phone" placeholder="Year " /> </div> <div class="form-group col-md-6"> <label for="inputEmail4">Aggregate </label> <input type="text" name="list[' + x + '][]" class="form-control" id="phone" placeholder="Aggregate " /> </div> <div class="col-xs-1 col-sm-7 col-md-1"><a href="javascript:void(0);" class="list_remove_button btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></a></div></div>'; //New input field html 
            $('.list_wrapper').append(list_fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $('.list_wrapper').on('click', '.list_remove_button', function () {
        $(this).closest('div.form-row').remove(); //Remove field html
        x--; //Decrement field counter
    });
});

$(document).ready(function () {
    var x = 0; //Initial field counter
    var list_maxField = 4; //Input fields increment limitation

    //Once add button is clicked
    $('.list_add_button1').click(function () {
        //Check maximum number of input fields
        if (x < list_maxField) {
            x++; //Increment field counter
            var list_fieldHTML = 
            '<br></br><div class="form-row"> <div class="form-group col-md-12"> <label for="inputCollege">Project Name</label> <input type="text" name="list[' + x + '][]" class="form-control" id="name" placeholder="Enter College Name" /> </div> <div class="form-group col-md-6"> <label for="inputCollege">Start Date</label> <input type="date" name="list[' + x + '][]" class="form-control" id="name" placeholder="Start Date" /> </div> <div class="form-group col-md-6"> <label for="inputCollege">End Date</label> <input type="date" name="list[' + x + '][]" class="form-control" id="name" placeholder="End Date" /> </div> <div class="form-group col-md-12"> <label for="inputEmail4">Description</label> <textarea type="text" name="list[' + x + '][]" class="form-control" id="phone" placeholder="Description" /> </div> <div class="form-group col-md-12"> <label for="inputEmail4">Responsibilities</label> <textarea type="email" name="list[' + x + '][]" class="form-control" id="inputEmail4" placeholder="Responsibilities" /> </div> <div class="form-group col-md-6"> <label for="inputAge">key Technologies</label> <input type="password" name="list[' + x + '][]" class="form-control" id="inputAge" placeholder="key Technologies" /> </div> <div class="form-group col-md-6"> <label for="inputAge">Tools Used</label> <input type="password" name="list[' + x + '][]" class="form-control" id="inputAge" placeholder="Tools Used" /> </div>  <div class="col-xs-1 col-sm-7 col-md-1"><a href="javascript:void(0);" class="list_remove_button1 btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></a> <br></br></div></div>'; //New input field html 
            $('.list_wrapper1').append(list_fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $('.list_wrapper1').on('click', '.list_remove_button1', function () {
        $(this).closest('div.form-row').remove(); //Remove field html
        x--; //Decrement field counter
    });
});

$(document).ready(function () {
    var x = 0; //Initial field counter
    var list_maxField = 4; //Input fields increment limitation

    //Once add button is clicked
    $('.list_add_button2').click(function () {
        //Check maximum number of input fields
        if (x < list_maxField) {
            x++; //Increment field counter
            var list_fieldHTML = 
            '<br/><div class="form-row"> <div class="form-group col-md-8"> <label for="inputCity">Skills</label> <input type="text" name="list[' + x + '][]" class="form-control" id="inputCity" /> </div> <div class="form-group col-md-4"> <label for="inputZip">Percentage</label> <input type="text" name="list[' + x + '][]" class="form-control" id="inputZip" /> </div> <div><a href="javascript:void(0);" class="list_remove_button2 btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></a> <br></br></div></div>'; //New input field html 
            $('.list_wrapper2').append(list_fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $('.list_wrapper2').on('click', '.list_remove_button2', function () {
        $(this).closest('div.form-row').remove(); //Remove field html
        x--; //Decrement field counter
    });
});