var upvotes = [];
$(document).ready(function () {
	$('.slider').slider({
		full_width: true
	});
	$("i.tiny").click(function (e) {
		var key = $(this).prev().attr("href");
		var iti, upvote;
		console.log(key);
		for (var x = 0; x < $("i.tiny").length; x++)
			if ($(this).is($("i.tiny")[x]))
				iti = x;
		console.log(iti);

		if (!upvotes[iti]) {
			upvotes[iti] = {
				"prodId": key,
				"upvote": 1
			}
		}

		else
			upvotes[iti].upvote += 1;
		console.log($(this));
		$(this).next().html(upvotes[iti].upvote);
	});
});