/**
 * GET /job
 * job form page.
 */

exports.getJob = function(req, res) {
  res.render('job', {
    title: 'Job'
  });
};

exports.postJob = function(req, res) {
	req.assert('name', 'Name cannot be blank').notEmpty();
	req.assert('phone', 'Phone cannot be blank').notEmpty();
	req.assert('amount', 'Amount').notEmpty();

	var errors = req.validationErrors();

	if (errors) {
		req.flash('errors', errors);
		return res.redirect('/job');
	}

    res.redirect('/job');
}

