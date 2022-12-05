function insert(num) {
	$('.display').val($('.display').val() + num);
}
function equal() {
	$('.display').val(eval($('.display').val()));
}
function c() {
	$('.display').val('');
}
function del() {
	value = $('.display').val();
	$('.display').val(value.substring(0, value.length - 1));
}
