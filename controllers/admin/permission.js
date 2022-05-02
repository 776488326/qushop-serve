const { default: mongoose } = require("mongoose");
const {permissionModel} = require("../../models/index")

// 顶层权限add
const permissionAdd = async (ctx)=>{
    try {
        const permission = ctx.request.body;
        const doc = await permissionModel.create(permission)
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:{}
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                code: 400,
                msg:"filed",
                data:{}
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg:"filed",
            data:error
        }
    }
}
// del
const permissionDel = async (ctx)=>{
    const permission = ctx.request.body.permission;
    var doc = null;
    if(permission.level == 1){
        doc = await permissionModel.deleteOne({"_id":mongoose.Types.ObjectId(permission._id)});
    }else if(permission.level == 2){
        doc = await permissionModel.updateOne({"_id":mongoose.Types.ObjectId(permission.pid)},{"$pull":{"children":{"_id":mongoose.Types.ObjectId(permission._id)}}}); 
    }else{
        doc = await permissionModel.updateOne({"children._id":mongoose.Types.ObjectId(permission.pid)},{"$pull":{"children.$.children":{"_id":mongoose.Types.ObjectId(permission._id)}}});
    }
    try {
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code:200,
                msg:"success",
                data:{
                    children:doc
                }
            }    
        }else{
            ctx.status = 200;
            ctx.body = {
                code: 400,
                msg: "filed",
                data:{}
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code:500,
            msg:"filed",
            data:error
        }
    }
}
// 非顶层权限的add和update
const permissionUpdate = async (ctx)=>{
    try {
        const permission = ctx.request.body;
        var doc = null;
        var item = new permissionModel(permission);
        console.log(permission);
        if(permission.level==1){
            // 第一层修改
            doc = await permissionModel.updateOne({"_id":permission._id},permission);
        }else if(permission.level==2){
            // 第二层修改
            if(permission._id){
                // 更新
                doc = await permissionModel.updateOne(
                    {"children._id":mongoose.Types.ObjectId(permission._id)},
                    {"$pull":{"children":{"_id":mongoose.Types.ObjectId(permission._id)}}}
                );
                doc = await permissionModel.updateOne(
                    {"_id":mongoose.Types.ObjectId(permission.pid)},
                    {"$push":{"children":item}}
                );
                
            }else{
                // 添加
                doc = await permissionModel.updateOne(
                    {"_id":mongoose.Types.ObjectId(permission.pid)},
                    {"$push":{"children":item}}
                )
            }
        }else{
            // 第三层修改
            if(permission._id){
                // 更新
                doc = await permissionModel.updateOne(
                    {"children._id":mongoose.Types.ObjectId(permission.pid)},
                    {"$pull":{"children.$.children":{"_id":mongoose.Types.ObjectId(permission._id)}}}
                );
                doc = await permissionModel.updateOne(
                    {"children._id":mongoose.Types.ObjectId(permission.pid)},
                    {"$push":{"children.$.children":item}}
                );
            }else{
                // 添加
                doc = await permissionModel.updateOne(
                    {"children._id":mongoose.Types.ObjectId(permission.pid)},
                    {"$push":{"children.$.children":item}}
                );
            }
        }
        if(doc.modifiedCount){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:{}
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                code: 400,
                msg:"filed",
                data:doc
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg:"filed",
            data:error
        }
    }
}
// list
const permissionList = async (ctx)=>{
    try {
        const docs = await permissionModel.find({});
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:{
                children:docs
            }
        }    
    } catch (error) {
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"filed",
            data:error
        }
    }
    
}


module.exports = {
    permissionAdd,
    permissionDel,
    permissionUpdate,
    permissionList,
}