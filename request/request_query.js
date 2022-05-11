
const request = {
    housingMoveRequest: {
        query: "select addhousingmove($1,$2,$3)",
        params: ['token', 'id_flat', 'notes']
    }/*طلب نقل */,

    statiscsRequest: {
        query: "select addstatisrequest($1,$2,$3,$4,$5,$6)",
        params: ['name', 'fathername', 'surename', 'phonenumber', 'notes', 'id_flat']
    }/*طلب إحصاء */,

    numberingRequest: {
        query: "select addnumbering($1,$2,$3,$4,$5)",
        params: ['name', 'fathername', 'surename', 'id_record', 'isrecord']
    }/*طلب ترميز */,
     complaintRequest: {
        query: "select addcomplaint($1,$2,$3)",
        params: ['token', 'title', 'subject']
    }/*طلب نقل */,
    vedio: {
        query: "SELECT id, url, title, description FROM public.definitionofstatis;",
        params: []
    },
    notification: {
        query: "SELECT * from getnotification($1);",
        params: ['token']
    },
    nnotification: {
        query: "SELECT * from getrnotification($1);",
        params: ['token']
    },
    readnotification: {
        query: "SELECT  readnotification($1);",
        params: ['id']
    },
    

}

module.exports = request;