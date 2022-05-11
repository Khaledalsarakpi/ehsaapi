const list = {
    get_flat: "select id,name,floor_id as idref,code from flat;",
    get_floor: "select  id,name,record_id as idref,code from floor;",
    get_record: "select  id,name,block_id as idref,code from record;",
    get_block: "select  id,name,section_id as idref,code from block;",
    get_section: "select  id,name,town_id as idref,code from section;",
    get_town: "select  id,name,nahia_id as idref,code from town;",
    get_nahia: "select  id,name ,area_id as idref,code  from  nahia;",
    get_area: "select  id,name,state_id as idref,code  from area;",
    get_state: "select  id,name,code from state;",
}
module.exports = list;