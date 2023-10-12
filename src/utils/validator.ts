import { StatusCodes } from 'http-status-codes'
import * as joi from 'joi'

export const validator = (schema: any, body: any) => {
     const {error, value} = schema.validate(body, {abortEarly: true})
     if(error) {
        return {
            ok: false,
            status: StatusCodes.BAD_REQUEST,
            message: "An error Occur",
            body : {error: error.message}
        }
     }
     return value
     
}

// private readonly category = Category;
// private readonly post = Post;
// async create(payload: IPost, categoryId: string, data: IUser) {
//   const { id } = data.user;
//   const cat_id = await this.category.findOne({ where: { id: categoryId } });
//   if (!cat_id) {
//     throw {
//       ok: false,
//       status: 400,
//       message: 'Invalid parant string provided',
//     };
//   }

// constructor(private category: CategoryService) {}
// @Post('/create')
// @ApiCreatedResponse({ description : 'Create Category'})
// @ApiBody({type: categoryDto})

// async create(@Body() categoryDtos: categoryDto, @Response() res) {
//   try {
//     const category = await this.category.create(categoryDtos);
//     return res.status(category.status).json({ ...category });
//   } catch (err) {
//     return res.status(err.status).json({ ...err });
//   }
// }