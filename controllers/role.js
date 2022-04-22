const { default: mongoose } = require("mongoose");
const {roleModel} = require("../models/index");

//角色添加

const roleAdd = async (ctx)=>{
    const doc = await roleModel.findOne({roleName:ctx.request.body.roleName});
    if(!doc){
    const res = await roleModel.create(ctx.request.body);
    if(res){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "添加成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 500,
            msg: "添加失败！",
            data: {}
        }
    }}else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "角色名重复！",
            data: {}
        }
    }
}
//角色删除

const roleDel = async (ctx)=>{
    const ids = ctx.request.body.ids;
    ids.forEach((item,index) => {
        ids[index] = mongoose.Types.ObjectId(item);
        console.log(ids[index]);
    });
    const res = await roleModel.deleteMany({"_id":{"$in":ids}})
    
    if(res.deletedCount){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "删除成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "删除失败！",
            data: {}
        }
    }
    
}

//角色更新

const roleUpdate = async (ctx)=>{
    //res 如果成功则为更新之前的值，如果失败则为null
    const res = await roleModel.findByIdAndUpdate(ctx.request.body._id,ctx.request.body);
    if(res){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "更新成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 500,
            msg: "更新失败！",
            data: {}
        }
    }
}
//角色列表

const roleList = async (ctx)=>{
    try {
        const {limit,page,roleName} = ctx.query;
        var list = null;
        if(roleName){
            list = await roleModel.aggregate([
                {"$match":{"roleName":roleName}}
            ])
        }else{
            list = await roleModel.aggregate(
                [
                    {
                        "$sort":{'roleName':1}
                    },{
                        "$skip": limit*(page-1)
                    }
                ]
            );
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "获取成功！",
            data: {
                total:list.length,
                items:list
            }
        }
    } catch (error) {
        ctx.status = 500
        ctx.body = {
            code: 500,
            msg: "获取失败！",
            data: error
        }
    }
}

//角色查找

const roleInfo = async (ctx)=>{
    const {roleId,authority} = ctx.query;
    const info = await roleModel.findById(roleId);
    if(info){
        if(authority){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: "获取成功！",
                data: info.authorityList
            }
        }
        else{
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: "获取成功！",
                data: info
            }
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 500,
            msg: "获取失败！",
            data: {}
        }
    }
}

//清空集合
const dropSet = async (ctx)=>{
    const docs = await roleModel.remove({});
    console.log(docs);
    if(docs.deletedCount){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "清空成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "清空失败！",
            data: {}
        }
    }
}

module.exports = {
    roleAdd,
    roleDel,
    roleList,
    roleUpdate,
    roleInfo,
    dropSet
}