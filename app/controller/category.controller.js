const slugify = require("slugify");
const CategoryService = require("../services/category.service");
class CategoryController{
    constructor() {
        this.category_svc = new CategoryService();
    }
    categoryStore = async(req, res, next) =>{
        try{
            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            }
            data.slug = slugify(data.name, {
                lower: true
            });
            // id,id,id
            if(!data.brands || data.brands == 'null'){
                data.brands = null;
            }

            if(!data.parent_id || data.parent_id === 'null'){
                data.parent_id = null;
            }
        
            this.category_svc.storeValidate(data);
            let response = await this.category_svc.createCategory();
            res.json({
                result: response,
                msg: "Category created successfully",
                status: true
            })
        }catch(except){
            console.log("CategoryStore: ", except);
            next({status: 400, msg: except})
        }
    }
    getCategories =async (req, res, next) => {
        try{
            let paginate = {
                total_count: await this.category_svc.getAllCounts(),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let data = await this.category_svc.getCategories(skip, paginate.per_page);
            res.json({
                result: data, 
                status: true, 
                paginate: paginate,
                msg: "Data fetched"
            })
        } catch(except) {
            console.log("List Category: ", except)
            next({status: 400, msg: except})
        }
    }

    getCategoryById = async (req, res, next) => {
        try{
            let data = await this.category_svc.findById(req.params.id)
            if(data) {
                res.json({
                    result: data, 
                    status: true,
                    msg: "Data fetched"
                })
            } else {
                next({status: 404, msg: "Data does not exists"})
            }
        } catch(except) {
            console.log("Fetch By id: ", except);
            next({status: 400, msg: except})
        }
    }

    deleteById = async (req, res, next) => {
        try{
            let data = await this.category_svc.deleteById(req.params.id)
            if(data) {
                res.json({
                    result: data, 
                    status: true,
                    msg: "Data Deleted"
                })
            } else {
                next({status: 404, msg: "Data does not exists"})
            }
        } catch(except) {
            console.log("Fetch By id: ", except);
            next({status: 400, msg: except})
        }
    }

    categoryUpdate = async(req, res, next) =>{
        try{
            let current_data = await this.category_svc.findById(req.params.id);

            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            } else {
                data.image = current_data.image;
            }
            data.slug = current_data.slug
        
            // id,id,id
            if(!data.brands || data.brands == 'null'){
                data.brands = null;
            }

            if(!data.parent_id || data.parent_id === 'null'){
                data.parent_id = null;
            }

            this.category_svc.storeValidate(data);
            let response = await this.category_svc.updateCategory(req.params.id);
            res.json({
                result: response,
                msg: "Category Updated successfully",
                status: true
            })
        }catch(except){
            console.log("UpdateCategory: ", except);
            next({status: 400, msg: except})
        }
    }
}
module.exports = CategoryController;
