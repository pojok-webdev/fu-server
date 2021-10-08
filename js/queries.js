getTickets = (callback) => {
    sql = 'select id,kdticket,clientname,create_date from tickets '
    sql+= 'where status="1" '
    sql+= 'limit 0,10'
    callback(sql)
}
getTicketByKdticket = (obj,callback) => {
    sql = 'select a.id,a.kdticket,a.clientname,ticketstart,a.create_date,count(b.id)fu from tickets a '
    sql+= 'left outer join ticket_followups b on b.ticket_id=a.id '
    sql+= 'where  a.kdticket='+obj.kdticket+' '
    console.log('getTicketByKdticket',sql)
    callback(sql)
}
getTicketsBySegment = (obj,callback) => {
    sql = 'select id,kdticket,create_date from tickets '
    sql+= 'where status="1" '
    sql+= 'limit '+obj.segment+', '+obj.offset+' '
    callback(sql)
}
getfusbykdticket = (obj,callback)=>{
    sql = 'select a.id,a.ticket_id,a.description,a.username,a.result,a.conclusion,a.createdate from ticket_followups a '
    sql+= 'left outer join tickets b on b.id=a.ticket_id '
    sql+= 'where b.kdticket="'+obj.kdticket+'" '
    callback(sql)
}
module.exports = {
    getTickets:getTickets,
    getTicketByKdticket:getTicketByKdticket,
    getTicketsBySegment:getTicketsBySegment,
    getfusbykdticket:getfusbykdticket
}