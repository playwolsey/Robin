/**
 * @desc index controller
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

exports.index = (req, res) => {
    res.render('404', {
        title: 'markup'
    });
};
