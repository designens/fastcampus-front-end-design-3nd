/**
 *  @function marginBottom
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {number}  x
 *  @param    {number}  ratio
 *  @return   {number}  글자 크기(상대 값)에 상대적인 margin-bottom 비율
 */
function marginBottom(x, ratio) {
    ratio = ratio || 1.5;
    return ratio/x;
}

/**
 *  @function lineHeight
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {number}  x
 *  @param    {number}  ratio
 *  @return   {number}  글자 크기(상대 값)에 상대적인 행간 비율
 */
function lineHeight(x, ratio) {
    ratio = ratio || 1.5;
   return Math.ceil(x/ratio) * marginBottom(x, ratio);
}

/**
 *  @function fontSize
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {number}  type_scale
 *  @param    {number}  limit
 *  @return   {object}  제목 글자 크기 상대 값을 반환하는 객체
 */
var fontSize = (function() {
    var square = (x, count) => {
        var y = x;
        while(--count) { x *= y; }
        return x;
    };
    return (type_scale, limit) => {
        type_scale = type_scale || 1.25;
        limit = limit || 6;
        var headings_map = {},
            headings = 'h1 h2 h3 h4 h5 h6'.split(' ').slice(0, limit);
        headings.forEach(function(heading, index) {
            headings_map[heading] = square(type_scale, headings.length - index);
        });
        return headings_map;
    };
})();
