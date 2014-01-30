Modernizr.addTest( 'whatsapp', function () {
    var isSupportedOs = /android|iphone|blackberry([0-9]+\/(4\.[6-9]|[5-9])|.+Version\/[5-9])|series(40|60)|windows phone( os)? (7\.5|8)/i.test( navigator.userAgent || navigator.vendor );
    return isSupportedOs;
} );