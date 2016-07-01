BOOMR.t_end = new Date().getTime();

BOOMR.addVar('page_type', document.getElementsByTagName('BODY')[0].getAttribute('data-page-type'));
BOOMR.init({
    beacon_url: '/beacon'
});
