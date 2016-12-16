
function loginFunction () {
    $.ajax({
        url: "Home/Login",
        data: { 
            Username: $(".username").val(),
            Password: $(".password").val() 
        },
        success: function (result) { alert(result); }
    });
}
function createAccountFunction() {
    $.ajax({
        url: "Home/CreateAccount",
        data: { 
            Username: $(".username").val(),
            Password: $(".password").val(),
            EmailAdd: $(".emailAdd").val(),
            EmailCon: $(".emailCon").val()
        },
        success: function (result) { alert(result); }
    });
}
function getAccountInfoFuction() {
    $.ajax({
        url: "Home/GetAccountInformation",
        data: { Username: $(".username").val() },
        success: function (result) { alert(result); }
    });
}
function addorUpdateFuction() {
    $.ajax({
        url: "Home/AddorUpdateElement",
        data: { 
            Username: $(".username").val(),
            Password: $(".password").val(),
            ElementName: $(".elementName").val(),
            ElementValue: $(".elementValue").val()
        },
        success: function (result) { alert(result); }
    })
}
function change() {

}